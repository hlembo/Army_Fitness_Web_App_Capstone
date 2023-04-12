from flask_admin import BaseView, expose
from flask import render_template_string, request
from plotly.subplots import make_subplots
import plotly.graph_objs as go
import plotly.io as pio
from flask_admin.contrib.sqla import ModelView
import numpy as np
from sklearn.linear_model import LinearRegression



from .models import User, Acft
from . import db

class GraphView(BaseView):
    
    @expose('/', methods = ['GET', 'POST'])
    def index(self):
         
        # Get the selected gender from the request form
        selected_gender = request.form.get('gender', 'all')

        # Fetch data from the database with the gender filter applied
        query = db.session.query(User.username, Acft).join(Acft, User.id == Acft.user_id)

        # Filter by unofficial records
        query = query.filter(Acft.official == False)

        if selected_gender != 'all':
            query = query.filter(Acft.gender == selected_gender)
        acft_results = query.all()
    
        # Prepare data for the plot
        event_names = ['twomilerun', 'mdl', 'spt', 'hrp', 'plk', 'sdc']
        data = {event_name: {'username': [], 'score': []} for event_name in event_names}

        for username, result in acft_results:
            for event_name in event_names:
                score = abs(getattr(result, event_name))
                if event_name in ['twomilerun', 'sdc', 'plk']:
                    score = format_time(score)
                data[event_name]['username'].append(username)
                data[event_name]['score'].append(score)

        # Create a Plotly subplot
        fig = make_subplots(rows=1, cols=len(data), subplot_titles=list(data.keys()), 
                            horizontal_spacing=0.05)

        # Add data to the subplot
        for event_index, (event_name, event_data) in enumerate(data.items(), start=1):
            unique_users = list(set(event_data['username']))
            for i, username in enumerate(unique_users):
                user_scores = [event_data['score'][j] for j in range(len(event_data['username'])) if event_data['username'][j] == username]

                hovertemplate = None
                if event_name in ['twomilerun', 'sdc', 'plk']:
                    hovertemplate = 'Username: %{x}<br>Score: %{y:.2f} minutes (%{customdata})<extra></extra>'

                # Create unique x values by concatenating username with a unique identifier
                x_values = [f"{username}_{j}" for j in range(len(user_scores))]

                fig.add_trace(
                    go.Bar(
                        x=x_values,
                        y=user_scores,
                        name=username,
                        legendgroup=username,
                        showlegend=(event_index == 1),
                        customdata=[format_minutes_to_mmss(score) for score in user_scores],
                        hovertemplate=hovertemplate,
                    ),
                    row=1,
                    col=event_index,
                )
        


            # Update y-axis tick labels for the events with time values
            if event_name in ['twomilerun', 'sdc', 'plk']:
                fig.update_yaxes(tickvals=list(range(0, int(max(event_data['score']))+1)), ticktext=[format_minutes_to_mmss(val) for val in range(0, int(max(event_data['score']))+1)], row=1, col=event_index)
                # Set the x-axis title for all subplots
                fig.update_xaxes(title_text="Username")

        # Generate the Plotly HTML output
        plot_html = pio.to_html(fig, full_html=False)

         # Render the template with the Plotly output and gender selection form
        return render_template_string("""
            <html>
                <head>
                    <title>Graphical Output</title>
                </head>
                <body>
                    <form method="post">
                        <label for="gender">Select Gender:</label>
                        <select name="gender" id="gender">
                            <option value="all" {% if selected_gender == 'all' %}selected{% endif %}>All</option>
                            <option value="male" {% if selected_gender == 'male' %}selected{% endif %}>Male</option>
                            <option value="female" {% if selected_gender == 'female' %}selected{% endif %}>Female</option>
                        </select>
                        <input type="submit" value="Filter">
                    </form>
                    {{ plot_html|safe }}
                </body>
            </html>
            """, plot_html=plot_html, selected_gender=selected_gender)


class OfficialACFTView(BaseView):
    
    @expose('/', methods=['GET', 'POST'])
    def index(self):
        # Get the selected gender from the request form
        selected_gender = request.form.get('gender', 'all')

        # Fetch data from the database with the gender and official filters applied
        query = db.session.query(User.username, Acft).join(Acft, User.id == Acft.user_id).filter(Acft.official == True)
        if selected_gender != 'all':
            query = query.filter(Acft.gender == selected_gender)
        acft_results = query.all()

        # Prepare data for the plot
        event_names = ['twomilerun', 'mdl', 'spt', 'hrp', 'plk', 'sdc']
        data = {event_name: {'username': [], 'score': []} for event_name in event_names}

        for username, result in acft_results:
            for event_name in event_names:
                score = abs(getattr(result, event_name))
                if event_name in ['twomilerun', 'sdc', 'plk']:
                    score = format_time(score)
                data[event_name]['username'].append(username)
                data[event_name]['score'].append(score)

        # Create a Plotly subplot
        fig = make_subplots(rows=1, cols=len(data), subplot_titles=list(data.keys()), 
                            horizontal_spacing=0.05)

        # Add data and linear regression to the subplot
        for event_index, (event_name, event_data) in enumerate(data.items(), start=1):
            unique_users = list(set(event_data['username']))
            for i, username in enumerate(unique_users):
                user_scores = [event_data['score'][j] for j in range(len(event_data['username'])) if event_data['username'][j] == username]

                hovertemplate = None
                if event_name in ['twomilerun', 'sdc', 'plk']:
                    hovertemplate = 'Username: %{x}<br>Score: %{y:.2f} minutes (%{customdata})<extra></extra>'

                # Create unique x values by concatenating username with a unique identifier
                x_values = [f"{username}_{j}" for j in range(len(user_scores))]

                fig.add_trace(
                    go.Bar(
                        x=x_values,
                        y=user_scores,
                        name=username,
                        legendgroup=username,
                        showlegend=(event_index == 1),
                        customdata=[format_minutes_to_mmss(score) for score in user_scores],
                        hovertemplate=hovertemplate,
                    ),
                    row=1,
                    col=event_index,
                )

            # Add linear regression
            X = np.arange(len(event_data['score'])).reshape(-1, 1)
            y = np.array(event_data['score']).reshape(-1, 1)
            model = LinearRegression().fit(X, y)
            y_pred = model.predict(X)
            fig.add_trace(
                go.Scatter(
                    x=[f"{username}_{j}" for j in range(len(event_data['score']))],
                    y=y_pred.flatten(),
                    mode="lines",
                    line=dict(color='red', width=2),
                    name="Linear Regression",
                    showlegend=(event_index == 1),
                ),
                row=1,
                col=event_index,
                )
        
        # Generate the Plotly HTML output
        plot_html = pio.to_html(fig, full_html=False)

        # Render the template with the Plotly output and gender selection form
        return render_template_string("""
            <html>
                <head>
                    <title>Official ACFT Scores</title>
                </head>
                <body>
                    <form method="post">
                    <label for="gender">Select Gender:</label>
                    <select name="gender" id="gender">
                        <option value="all" {% if selected_gender == 'all' %}selected{% endif %}>All</option>
                        <option value="male" {% if selected_gender == 'male' %}selected{% endif %}>Male</option>
                        <option value="female" {% if selected_gender == 'female' %}selected{% endif %}>Female</option>
                    </select>
                    <input type="submit" value="Filter">
                </form>
                {{ plot_html|safe }}
            </body>
        </html>
    """, plot_html=plot_html, selected_gender=selected_gender)


class AcftModelView(ModelView):
    column_display_pk = True  # Display primary key columns
    can_export = True  # Allow data export

    # Customize the displayed columns
    column_list = ('id', 'user', 'twomilerun', 'mdl', 'spt', 'hrp', 'plk', 'sdc', 'score', 'gender', 'date', 'official')

    # Add a custom formatter to display the user's username instead of the user object
    def _user_formatter(view, context, model, name):
        return model.user.username if model.user else ''

    column_formatters = {
        'user': _user_formatter
    }



def format_time(seconds):
    seconds = abs(float(seconds))
    return seconds / 60  # Return time in minutes (float)

def format_minutes_to_mmss(minutes):
    seconds = int(minutes * 60)
    minutes = seconds // 60
    seconds %= 60
    return f"{minutes:02d}:{seconds:02d}"

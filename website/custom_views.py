from flask_admin import BaseView, expose
from flask import render_template_string
from plotly.subplots import make_subplots
import plotly.graph_objs as go
import plotly.io as pio

from .models import User, Acft
from . import db

class GraphView(BaseView):
    @expose('/')
    def index(self):
        # Fetch data from the database
        acft_results = db.session.query(User.username, Acft).join(Acft, User.id == Acft.user_id).all()

        # Prepare data for the plot
        event_names = ['twomilerun', 'mdl', 'spt', 'hrp', 'plk', 'sdc']
        data = {event_name: {'username': [], 'score': []} for event_name in event_names}

        for username, result in acft_results:
            for event_name in event_names:
                score = getattr(result, event_name)
                if event_name in ['twomilerun', 'sdc', 'plk']:
                    score = format_time(score)
                data[event_name]['username'].append(username)
                data[event_name]['score'].append(score)

    # Create a Plotly subplot
        fig = make_subplots(rows=1, cols=len(data), subplot_titles=list(data.keys()), 
                            horizontal_spacing=0.05)
        # adding data to the plot needs to be fixed so that sdc, plk, twomilerun are displayed from 0 to the max score they recieved!!
        # They are displaying as blank graphs right now because the database numbers are negative and the graph is not displaying them properly.
        
        # Add data to the subplot
        for event_index, (event_name, event_data) in enumerate(data.items(), start=1):
            unique_users = list(set(event_data['username']))
            for i, username in enumerate(unique_users):
                user_scores = [event_data['score'][j] for j in range(len(event_data['username'])) if event_data['username'][j] == username]
                fig.add_trace(
                    go.Bar(x=[username], y=user_scores, name=username, legendgroup=username, showlegend=(event_index==1)),
                    row=1, col=event_index
                )
        
        # Set the x-axis title for all subplots
        fig.update_xaxes(title_text="Username")

        # Generate the Plotly HTML output
        plot_html = pio.to_html(fig, full_html=False)

        # Render the template with the Plotly output
        return render_template_string("""
            <html>
                <head>
                    <title>Graphical Output</title>
                </head>
                <body>
                    {{ plot_html|safe }}
                </body>
            </html>
            """, plot_html=plot_html)

def format_time(seconds):
    seconds = abs(float(seconds))
    minutes = int(seconds // 60)
    seconds = int(seconds % 60)
    return f"{minutes:02d}:{seconds:02d}"

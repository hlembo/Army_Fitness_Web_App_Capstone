from flask import Blueprint, render_template, request, flash, url_for,redirect
from flask_login import login_required, current_user
from .models import Acft, User
from . import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask import render_template_string, request
from plotly.subplots import make_subplots
import plotly.graph_objs as go
import plotly.io as pio
from datetime import datetime
import numpy as np
from sklearn.linear_model import LinearRegression

views = Blueprint('views', __name__)

@views.route('/', methods = ["GET","POST"])
#@login_required
def home():
    return render_template("home.html", user = current_user)


@views.route('/cadre', methods = ["GET","POST"])
def cadre():
    return render_template("cadre.html", user = current_user)

@views.route('/mission', methods = ["GET","POST"])
def mission():
    return render_template("mission.html", user = current_user)

@views.route('/scholar', methods = ["GET","POST"])
def scholar():
    return render_template("scholar.html", user = current_user)

@views.route('/ms', methods = ["GET","POST"])
def ms():
    return render_template("ms.html", user = current_user)

@views.route('/bh', methods = ["GET","POST"])
def bh():
    return render_template("bh.html", user = current_user)

@views.route('/upcoming', methods = ["GET","POST"])
def upcoming():
    return render_template("upcoming.html", user = current_user)

@views.route('/contact', methods = ["GET","POST"])
def contact():
    return render_template("contact.html", user = current_user)

from datetime import datetime

@views.route('/acft_data', methods=["GET", "POST"])
@login_required
def acft_data():
    max_records = 10  # set maximum number of records here
    if request.method == 'POST':
        record_count = Acft.query.filter_by(user_id=current_user.id).count()
        if record_count >= max_records:
            flash("You have reached the maximum number of records.", category='error')
            return redirect(url_for('views.profile'))
        
        plk = request.form.get('plank')
        sdc = request.form.get('sprint-drag-carry')
        hrp = request.form.get('hand-release-push-up')
        twomile = request.form.get('two-mile-run')
        mdl = request.form.get('deadlift')
        spt = request.form.get('standing-power-throw')
        score1 = request.form.get("total-score")
        gender = request.form.get("gender")
        official = request.form.get("official") == 'true'
        date = request.form.get("date")
        
        # Parse the user date string to a datetime object
        date_obj = datetime.strptime(date, "%Y-%m-%d")

        new_acft = Acft(score=score1, twomilerun=twomile, mdl=mdl, spt=spt, hrp=hrp, sdc=sdc, plk=plk, gender=gender, official=official, date=date_obj, user_id=current_user.id)
        db.session.add(new_acft)
        db.session.commit()
    
    return render_template("acft_data.html", user=current_user)


@views.route('/acft', methods=["GET", "POST"])
@login_required
def acft():
    max_records = 10  # set maximum number of records here
    if request.method == 'POST':
        record_count = Acft.query.filter_by(user_id=current_user.id).count()
        if record_count >= max_records:
            flash("You have reached the maximum number of records.", category='error')
            return redirect(url_for('views.profile'))
        
        plk = request.form.get('plank')
        sdc = request.form.get('sprint-drag-carry')
        hrp = request.form.get('hand-release-push-up')
        twomile = request.form.get('two-mile-run')
        mdl = request.form.get('deadlift')
        spt = request.form.get('standing-power-throw')
        score1 = request.form.get("total-score")
        gender = request.form.get("gender")
        official = request.form.get("official") == 'true'
        date = request.form.get("date")
        
        # Parse the user date string to a datetime object
        date_obj = datetime.strptime(date, "%Y-%m-%d")

        new_acft = Acft(score=score1, twomilerun=twomile, mdl=mdl, spt=spt, hrp=hrp, sdc=sdc, plk=plk, gender=gender, official=official, date=date_obj, user_id=current_user.id)
        db.session.add(new_acft)
        db.session.commit()
    
    return render_template("acft.html", user=current_user)




@views.route('/record', methods = ["GET","POST"])
@login_required
def record():
    form_data = Acft.query.filter_by(user_id=current_user.id).all()
    table_data = {
        'Record Number': [],
        'MDL': [],
        'SDC': [],
        'HRP': [],
        'TMR': [],
        'SPT': [],
        'PLK': [],
        'Score': []
    }

    for acftscore in form_data:
        table_data['Record Number'].append(acftscore.id)
        table_data['MDL'].append(acftscore.mdl)
        table_data['SDC'].append(formatTime(acftscore.sdc * -1))
        table_data['HRP'].append(acftscore.hrp)
        table_data['TMR'].append(formatTime(acftscore.twomilerun * -1))
        table_data['SPT'].append(acftscore.spt)
        table_data['PLK'].append(formatTime(acftscore.plk))
        table_data['Score'].append(acftscore.score)

    fig = go.Figure(data=[go.Table(
    header=dict(
        values=list(table_data.keys()),
        fill_color='#0c0f15',
        align='left',
        font=dict(size=16, family='United Sans Reg', color='#ababab'),
        height=30,
        line=dict(color='white', width=0.25)  # Set the line width for header borders
    ),
    cells=dict(
        values=[table_data[key] for key in table_data.keys()],
        fill_color='rgba(255, 255, 255)',  # Transparent background
        align='left',
        font=dict(size=16, family='United Sans Reg', color='#ababab'),
        height=30
    ))
])



    plot_html = pio.to_html(fig, full_html=False)



    return render_template_string("""
    {% extends "base.html" %}
        <html>
            <head>
                <title>Record</title>
                <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
            </head>
            
                {% block content %}
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
                <link rel= "stylesheet" type= "text/css" href= "{{ url_for('static', filename='record.css') }}"/>
                
                {{ plot_html|safe }}
                <script>
                    window.addEventListener('load', function() {
                        changePlotlyBackgroundColor('#0c0f15');
                    });

                    function changePlotlyBackgroundColor(color) {
                        var plotlySVG = document.querySelector('.main-svg');
                        if (plotlySVG) {
                            var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                            rect.setAttribute('width', '100%');
                            rect.setAttribute('height', '100%');
                            rect.setAttribute('fill', color);
                            plotlySVG.insertBefore(rect, plotlySVG.firstChild);
                        }
                    }
                </script>

              
                {% endblock %}
                
            </body>
        </html>
        """, plot_html=plot_html, user = current_user)

def format_minutes_to_seconds(minutes):
    total_seconds = int(minutes * 60)
    minutes = total_seconds // 60
    seconds = total_seconds % 60
    return f"{minutes:02d}:{seconds:02d}"

@views.route('/dashboard', methods = ["GET","POST"])
@login_required
def dashboard():
    form_data = Acft.query.filter_by(user_id=current_user.id).all()
    if not form_data:
        return "<h3>No data available</h3>"
    data = {}
    for acftscore in form_data:
        event_names = ['twomilerun', 'mdl', 'spt', 'hrp', 'plk', 'sdc']
        for event_name in event_names:
            score = abs(getattr(acftscore, event_name))
            if event_name in ['twomilerun', 'sdc', 'plk']:
                score = formatTime(score)
            if event_name not in data:
                data[event_name] = []
            data[event_name].append({'date': acftscore.date, 'score': score})
    
    event_name_map = {
        'twomilerun': 'Two_Mile_Run',
        'spt': 'Standing_PT',
        'hrp': 'Hand_Release_Pushups',
        'sdc': 'Sprint_Drag_Carry',
        'mdl': 'Deadlift',
        'plk': 'Plank'
    }   

    # Create a list of subplot titles with the new event names
    subplot_titles = [event_name_map[event_name] for event_name in data.keys()]

    # Create a Plotly subplot for each event
    fig = make_subplots(rows=1, cols=len(data), subplot_titles=subplot_titles, 
                    horizontal_spacing=0.10)

       
    # Add data to the subplot
    for event_index, (event_name, event_data) in enumerate(data.items(), start=1):
        scores = [score_dict['score'] for score_dict in event_data]
        dates = [score_dict['date'] for score_dict in event_data]
        event_name_display = event_name_map[event_name]

        hovertemplate = None
        if event_name in ['twomilerun', 'sdc', 'plk']:
            hovertemplate = 'Score: %{text} (%{customdata|%Y-%m-%d})<extra></extra>'
        else:
            hovertemplate = 'Score: %{y} (%{customdata|%Y-%m-%d})<extra></extra>'

       # Prepare the data for linear regression
        X = np.array(range(len(dates))).reshape(-1, 1)
        y = np.array(scores)

        # Fit the linear regression model
        model = LinearRegression()
        model.fit(X, y)

        # Generate the predicted values for the linear regression line
        y_pred = model.predict(X)

        fig.add_trace(
            go.Bar(
                x=[date for date in dates],
                y=scores,
                name=event_name_display,
                hovertemplate=hovertemplate,
                customdata=dates,
                text=[format_minutes_to_seconds(val) if event_name in ['twomilerun', 'sdc', 'plk'] else val for val in scores],
                hoverlabel=dict(namelength=-1, align='left'),
            ),
            row=1,
            col=event_index,
        )

        # Add the linear regression trace
        fig.add_trace(
            go.Scatter(
                x=dates,
                y=y_pred,
                mode="lines",
                name="Linear Regression",
                line=dict(color="red"),
            ),
            row=1,
            col=event_index,
        )
        # Set the width of each subplot and the total figure width
        subplot_width = 400
        fig_width = subplot_width * len(data)

        # Set the figure size
        fig.update_layout(width=fig_width, height=600)

        # Update y-axis tick labels for the events with time values
        if event_name in ['twomilerun', 'sdc', 'plk']:
            fig.update_yaxes(tickvals=list(range(0, int(max(scores))+1)), ticktext=[format_minutes_to_mmss(val) for val in range(0, int(max(scores))+1)], row=1, col=event_index)

        # Set the x-axis title for all subplots
        fig.update_xaxes(title_text="Date", row=1, col=event_index)

        fig.update_yaxes(title_text=event_name_display, row=1, col=event_index)
         # Update the anchor properties of the subplot titles to adjust their position
       
    # Generate the Plotly HTML output
    plot_html = pio.to_html(fig, full_html=False)

    return render_template_string("""
        <html>
            <head>
                <title>Dashboard</title>
            </head>
            <body>
                {{ plot_html|safe }}
            </body>
        </html>
        """, plot_html=plot_html)





@views.route('/delete/<int:id>')
def delete(id):
    entry = Acft.query.get_or_404(id)
    db.session.delete(entry)
    db.session.commit()
    flash("Entry deleted", category='success')
    return redirect(url_for('views.record'))

@views.route('/profile', methods = ["GET","POST"])
@login_required
def profile():
    return render_template("profile.html", user = current_user)

@views.route('/update/<int:id>', methods=['GET', 'POST'])
def update(id):
    entry = User.query.get_or_404(id)
    if request.method == 'POST':
        email = request.form.get('email')
        password1 = request.form.get('password')
        if not email or not password1:
            flash("Please fill all the fields", category='error')
            return redirect(url_for('views.update', id = id))
        entry.email = email
        entry.password = generate_password_hash(password1)
        db.session.commit()
        flash("updated", category='success')
        return redirect(url_for('views.profile', user = current_user, entry = entry))
    return render_template("profile.html", user = entry, entry = entry)



def formatTime(seconds):
    seconds = abs(float(seconds))
    return seconds / 60  # Return time in minutes (float)

def format_minutes_to_mmss(minutes):
    seconds = int(minutes * 60)
    minutes = seconds // 60
    seconds %= 60
    return f"{minutes:02d}:{seconds:02d}"

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


@views.route('/acft', methods=["GET", "POST"])
@login_required
def acft():
    max_records = 10  # set maximum number of records here
    if request.method == 'POST':
        print(request.form)
        record_count = Acft.query.filter_by(user_id=current_user.id).count()
        if record_count >= max_records:
            flash("You have reached the maximum number of records.", category='error')
            return redirect(url_for('views.profile'))
        print(request.form.get('plank-score2'))
        plk = request.form.get('plank-score2')
        sdc = request.form.get('sprint-drag-carry-score2')
        hrp = request.form.get('hand-release-push-up-score2')
        twomile = request.form.get('two-mile-run-score2')
        mdl = request.form.get('deadlift-score2')
        spt = request.form.get('standing-power-throw-score2')
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
        table_data['SDC'].append(acftscore.sdc)
        table_data['HRP'].append(acftscore.hrp)
        table_data['TMR'].append(acftscore.twomilerun)
        table_data['SPT'].append(acftscore.spt)
        table_data['PLK'].append(acftscore.plk)
        table_data['Score'].append(acftscore.score)



    return render_template("record.html", table_data=table_data, user=current_user)





@views.route('/dashboard', methods=["GET", "POST"])
@login_required
def dashboard():
    # Query the database to get the scores for the current logged-in user
    acfts = Acft.query.filter_by(user_id=current_user.id).all()

    # Create a bar graph using Plotly for each category
    categories = ['TwoMileRun', 'MDL', 'SPT', 'HRP', 'PLK', 'SDC']
    bar_graphs = []

    for category in categories:
        scores = []
        record_dates = []
        for acft in acfts:
            score = getattr(acft, category.lower())
            if score is not None:
                scores.append(score)
                record_dates.append(acft.date.strftime("%Y-%m-%d"))

        fig = go.Figure(go.Bar(x=record_dates,
                               y=scores,
                               name=category))

        # Add linear regression line
        x = np.array(list(range(len(scores)))).reshape((-1, 1))
        y = np.array(scores)
        model = LinearRegression().fit(x, y)
        y_pred = model.predict(x)
        fig.add_trace(go.Scatter(x=record_dates, y=y_pred,
                                 mode='lines',
                                 name='Linear Regression'))

        fig.update_layout(title=f'{category} Scores per Record',
                          xaxis=dict(title='Date'),
                          yaxis=dict(title='Scores'))
        bar_graphs.append(fig.to_html(full_html=False))

    # Render the list of bar graphs as HTML divs
    return render_template('dashboard.html', bar_graphs=bar_graphs)






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

def format_minutes_to_seconds(minutes):
    seconds = int(minutes * 60)
    minutes = seconds // 60
    seconds %= 60
    return f"{minutes:02d}:{seconds:02d}"

def format_minutes_to_mmss(seconds):
    minutes, seconds = divmod(abs(int(seconds)), 60)
    return f"{minutes:02d}:{seconds:02d}"
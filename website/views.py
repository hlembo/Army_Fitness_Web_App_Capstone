from flask import Blueprint, render_template, request, flash, url_for,redirect
from flask_login import login_required, current_user
from .models import Acft
from . import db
import matplotlib.pyplot as plt
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

@views.route('/acft', methods = ["GET","POST"])
@login_required
def acft():
    if request.method == 'POST':
        plk = request.form.get('plank')
        sdc = request.form.get('sprint-drag-carry')
        hrp = request.form.get('hand-release-push-up')
        twomile = request.form.get('two-mile-run')
        mdl = request.form.get('deadlift')
        spt = request.form.get('standing-power-throw')
        score1 = request.form.get("total-score")
        new_acft = Acft( score = score1, twomilerun = twomile, mdl = mdl, spt = spt, hrp = hrp, sdc = sdc, plk=plk, user_id = current_user.id)
        db.session.add(new_acft)
        db.session.commit()
        return render_template("acft.html", user=current_user)
    return render_template("acft.html", user = current_user)


@views.route('/profile', methods = ["GET","POST"])
@login_required
def profile():
        form_data = Acft.query.filter_by(user_id=current_user.id).all()
        labels = [acftscore.id for acftscore in form_data]
        scores = [acftscore.score for acftscore in form_data]
        new_data = {"labels": labels, "data": scores}
        return render_template('profile.html', user=current_user, form_data=form_data, formatTime=formatTime, new_data=new_data)
@views.route('/dashboard', methods = ["GET","POST"])
@login_required
def dashboard():
    form_data = Acft.query.filter_by(user_id=current_user.id).all()
    labels = [acftscore.id for acftscore in form_data]
    scores = [acftscore.score for acftscore in form_data]
    new_data = {"labels": labels, "data": scores}
    return render_template("dashboard.html", user = current_user,  new_data=new_data, formatTime=formatTime)

@views.route('/delete/<int:id>')
def delete(id):
    entry = Acft.query.get_or_404(id)
    db.session.delete(entry)
    db.session.commit()
    flash("Entry deleted", category='success')
    return redirect(url_for('views.profile'))

def formatTime(seconds):
    minutes = int(seconds) // 60
    seconds = int(seconds) % 60
    return f"{minutes}:{seconds:02d}"


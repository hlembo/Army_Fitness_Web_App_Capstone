from flask import Blueprint, render_template, request, flash, url_for
from flask_login import  login_required, current_user
from .models import Acft
from . import db
views = Blueprint('views', __name__)

@views.route('/',  methods = ["GET","POST"])
#@login_required
def home():
    return render_template("home.html", user = current_user)

@views.route('/cadre',  methods = ["GET","POST"])
def cadre():
    return render_template("cadre.html", user = current_user)

@views.route('/mission',  methods = ["GET","POST"])
def mission():
    return render_template("mission.html", user = current_user)

@views.route('/scholar',  methods = ["GET","POST"])
def scholar():
    return render_template("scholar.html", user = current_user)

@views.route('/ms',  methods = ["GET","POST"])
def ms():
    return render_template("ms.html", user = current_user)

@views.route('/bh',  methods = ["GET","POST"])
def bh():
    return render_template("bh.html", user = current_user)

@views.route('/upcoming',  methods = ["GET","POST"])
def upcoming():
    return render_template("upcoming.html", user = current_user)

@views.route('/contact',  methods = ["GET","POST"])
def contact():
    return render_template("contact.html", user = current_user)

@views.route('/acft',  methods = ["GET","POST"])
def acft():
    if request.method == 'POST':
        plk = request.form.get('plank')
        sdc = request.form.get('sprint-drag-carry')
        hrp = request.form.get('hand-release-push-up')
        twomile = request.form.get('two-mile-run')
        mdl = request.form.get('deadlift')
        spt = request.form.get('standing-power-throw')
        new_acft = Acft( twomilerun = twomile, mdl = mdl, spt = spt, hrp = hrp, sdc = sdc, plk=plk, user_id = current_user.id)
        db.session.add(new_acft)
        db.session.commit()
        return render_template("profile.html", user=current_user, data=request)
    return render_template("acft.html", user = current_user)


@views.route('/profile', methods = ["GET","POST"])
@login_required
def profile():
        form_data = Acft.query.filter_by(user_id=current_user.id).all()
        return render_template('profile.html', user=current_user, form_data=form_data)
from flask import Blueprint, render_template, request, flash, url_for
from flask_login import  login_required, current_user

views = Blueprint('views', __name__)

@views.route('/',  methods = ["GET","POST"])
@login_required
def home():
    return render_template("home.html", user = current_user)

@views.route('/cadre',  methods = ["GET","POST"])
@login_required
def cadre():
    return render_template("cadre.html", user = current_user)
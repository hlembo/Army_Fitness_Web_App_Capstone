from flask import Blueprint, render_template, request, flash, redirect, url_for
import re, socket
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint('auth', __name__)

@auth.route('/login', methods = ["GET","POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get('password')

        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
                flash('Logged in successfully!', category='success')
                login_user(user, remember= True)
                return redirect(url_for('views.home'))
            else:
                flash('Incorrect password, try again.', category='error')
        else:
            flash('Email does not exist.', category = 'error')

    return  render_template("login.html", user = current_user)

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return  redirect(url_for('auth.login'))

@auth.route('/sign-up', methods = ["GET","POST"])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        username = request.form.get('username')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        user = User.query.filter_by(email=email).first()
        if user:
            flash('Email already exists.',category="error")
        elif not is_email_valid(email):
            flash('Invalid Email', category = "error")
        elif len(username) < 2:
            flash('Username must be Longer', category = "error")
        elif password1 != password2:
            flash('Passwords do not match', category = "error")
        elif not is_password_strong(password1):
            flash('Password must contains at least one lowercase letter, one uppercase letter, one digit, and one special character, and be longer than 8 characters!', category = "error")
        else:
            new_user = User(email =email, username = username, password = generate_password_hash(password1, method='sha256'))
            db.session.add(new_user)
            db.session.commit()
            login_user(new_user, remember= True)
            flash('Account created!', category = "sucessful")
            return redirect(url_for('views.home'))
            #add user to the database here
    return  render_template("sign-up.html", user = current_user)


def is_email_valid(email):
  # Use a regular expression to check if the email is in the correct format
  pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
  if not re.match(pattern, email):
    return False

  # Check if the domain is a real domain
  domain = email.split("@")[1]
  try:
    socket.gethostbyname(domain)
  except socket.gaierror:
    return False
  return True

def is_password_strong(password):
  # Check the length of the password
  if len(password) < 8:
    return False

  # Check if the password contains at least one lowercase letter, one uppercase letter, one digit, and one special character
  if not any(c.islower() for c in password):
    return False
  if not any(c.isupper() for c in password):
    return False
  if not any(c.isdigit() for c in password):
    return False
  if not any(re.match(r"[^a-zA-Z0-9]", c) for c in password):
    return False

  return True

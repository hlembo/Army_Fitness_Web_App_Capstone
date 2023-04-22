from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func
from flask_admin.contrib.sqla import ModelView
from flask_login import current_user

class Acft(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    twomilerun = db.Column(db.Float)
    mdl = db.Column(db.Integer)
    spt = db.Column(db.Integer)
    hrp = db.Column(db.Integer)
    plk = db.Column(db.Integer)
    sdc = db.Column(db.Integer)
    score = db.Column(db.Integer)
    gender = db.Column(db.String(6))
    date = db.Column(db.DateTime(timezone=True))  # Removed the default parameter
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    official = db.Column(db.Boolean, default=False)
    user = db.relationship('User', backref=db.backref('acfts', lazy=True))
    mslevel = db.Column(db.String(6))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    username = db.Column(db.String(150))
    is_admin = db.Column(db.Boolean, default=False)  # Add this line

from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func
from flask_admin.contrib.sqla import ModelView
from flask_login import current_user

class Acft(db.Model):
    id = db.Column(db.Integer, primary_key =True )
    twomilerun = db.Column(db.Float)
    mdl = db.Column(db.Integer)
    spt = db.Column(db.Float)
    hrp= db.Column(db.Integer)
    plk= db.Column(db.Float)
    sdc = db.Column(db.Float)
    score = db.Column(db.Integer)
    
    date = db.Column(db.DateTime(timezone = True), default = func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    username = db.Column(db.String(150))
    acft = db.relationship('Acft')

from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func

class Acft(db.Model):
    id = db.Column(db.Integer, primary_key =True )
    run = db.Column(db.Integer)
    dl = db.Column(db.Integer)
    pt = db.Column(db.Integer)
    pu= db.Column(db.Integer)
    pl= db.Column(db.Integer)
    sdc = db.Column(db.Integer)
    scr = db.Column(db.Integer)
    date = db.Column(db.DateTime(timezone = True), default = func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    username = db.Column(db.String(150))
    acft = db.relationship('Acft')
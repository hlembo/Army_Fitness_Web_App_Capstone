from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
db = SQLAlchemy()
DB_NAME = "database.db"
from flask_login import LoginManager

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'ENV_VARIABLE'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    db.init_app(app)
    
    app.static_folder = 'static'
    from .views import views
    from .auth import auth

    app.register_blueprint(views, url_prefix ='/')
    app.register_blueprint(auth, url_prefix ='/')

    from .models import User, Acft
    
    create_database(app)


    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))

    return app

def create_database(app):
    
    if not path.exists('website/' + DB_NAME):
        with app.app_context():
            #db.drop_all()
            db.create_all()
        print('Created Database')

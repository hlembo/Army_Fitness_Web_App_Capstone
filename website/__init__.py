from flask import Flask, request, render_template, flash, redirect, url_for, abort
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_admin import Admin,  AdminIndexView
from flask_admin.base import expose
from flask_admin.contrib.sqla import ModelView
from flask_login import current_user

db = SQLAlchemy()
DB_NAME = "database.db"
from flask_login import LoginManager

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'HSDESDFESDFSEFSDFSDFSDFSD'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    db.init_app(app)
    
    app.static_folder = 'static'
    from .views import views
    from .auth import auth

    class CustomAdminIndexView(AdminIndexView):
    
        @expose('/admin')
        def admin_panel(self):
            return redirect(url_for('/admin'))

        @property
        def extra_args(self):
            return {'base_template': 'admin/my_master.html'}


        

    app.register_blueprint(views, url_prefix ='/')
    app.register_blueprint(auth, url_prefix ='/')

    create_database(app)

    from .models import User, Acft 
    from .custom_views import GraphView, OfficialACFTView, AcftModelView
    admin = Admin(app, index_view=CustomAdminIndexView(), name='Admin Panel', template_mode="bootstrap3")


    admin.add_view(ModelView(User,  db.session))
    admin.add_view(AcftModelView(Acft, db.session))
    admin.add_view(GraphView(name='Un-Official_ACFT_Records', endpoint='graph'))
    admin.add_view(OfficialACFTView(name='Official_ACFT_View', endpoint='official_acft'))

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
        #push
        
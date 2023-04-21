from website import db, create_app
from website.models import User
from werkzeug.security import generate_password_hash

app = create_app()
app.app_context().push()

email = 'lembohenry@gmail.com'
username = 'admin'
password = 'password'
is_admin = True

existing_user = User.query.filter_by(email=email).first()
if not existing_user:
    admin_user = User(email=email, username=username, password=generate_password_hash(password, method='sha256'), is_admin=is_admin)
    db.session.add(admin_user)
    db.session.commit()
    print("Admin user created successfully!")
else:
    print("Admin user already exists.")

from flask import Flask
from flask_cors import CORS
from config import Config
from models.User import User
from models import db,jwt
from controllers.login_controller import login_bp
from controllers.signup_controller import user_bp
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

migrate = Migrate()

def create_app():
    app=Flask(__name__)
    app.config.from_object(Config)


    CORS(app,
         origins=['https://localhost:5173'],
         methods=['GET','POST','DELETE','OPTIONS'],
         allow_headers=['Content-Type', 'Authorization'],
         supports_credentials=True)
    
    db.init_app(app)
    jwt.init_app(app)
    #FOr debuging purposes 
    print('JWT Manager initiased')

    app.register_blueprint(user_bp)
    app.register_blueprint(login_bp,url_prefix='/login')

    with app.app_context():
        db.create_all()

    return app

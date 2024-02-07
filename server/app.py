# app.py
from flask_migrate import Migrate, migrate
from flask import Flask
from models import db, User, Movie, RentalTransaction


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
migrate = Migrate(app, db)
db.init_app(app)


app.route('/')
def home:
    return "this is home page "
   
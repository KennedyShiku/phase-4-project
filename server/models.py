# models.py
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()
class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key =True)
    username = db.Column(db.String(25))
    email = db.Column (db.String (50))
    password = db.Column(db.String(10))



class Rental_transaction(db.Model):
    __tablename__ = "rental_transactions"

    id = db.Column(db.Integer, primary_key= True)
    user_id = db.Column(db.Integer, db.Foreignkey('users.id'))
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'))
    rental_date = db.Column(db.Integer)
    return_date = db.Column(db.Integer)



class Movie(db.Model):
    __tablename__ = "movies"


    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String)
    genre = db.Column(db.String)
    release_year = db.Column(db.Integer)
    stock = db.Column(db.Integer)









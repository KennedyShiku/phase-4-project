from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(25))
    email = db.Column(db.String(50))
    password_hash = db.Column(db.String(128))
    rental_transaction = db.relationship('RentalTransaction', backref ="users")
    movie = db.relationship('Movie', secondary = "rental_transactions", backref = "users")
    
    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')
    
    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)
    
    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

class RentalTransaction(db.Model):
    __tablename__ = "rental_transactions"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'))
    rental_date = db.Column(db.Integer)
    return_date = db.Column(db.Integer)


    
    

class Movie(db.Model):
    __tablename__ = "movies"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    genre = db.Column(db.String)
    release_year = db.Column(db.Integer)
    stock = db.Column(db.Integer)


    rental_transaction = db.relationship('RentalTransaction', backref ="movies")

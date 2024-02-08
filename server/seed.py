# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# from werkzeug.security import generate_password_hash
# from models import User, Movie, RentalTransaction

# # Create Flask application
# app = Flask(__name__)

# # Configure the Flask application
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# # Initialize SQLAlchemy with the Flask app
# db = SQLAlchemy(app)

# # Define seed data creation function
# def create_seed_data():
#     with app.app_context():
#         # Create users
#         user1 = User(username='user1', email='user1@example.com')
#         user1.password = generate_password_hash('password1')  # Set password using setter method
#         user2 = User(username='user2', email='user2@example.com')
#         user2.password = generate_password_hash('password2')

#         # Create movies
#         movie1 = Movie(title='Movie 1', genre='Action', release_year=2020, stock=10)
#         movie2 = Movie(title='Movie 2', genre='Comedy', release_year=2019, stock=8)
#         movie3 = Movie(title='Movie 3', genre='Drama', release_year=2021, stock=12)

#         # Create rental transactions
#         rental1 = RentalTransaction(user_id=user1.id, movie_id=movie1.id, rental_date=1631990400, return_date=None)
#         rental2 = RentalTransaction(user_id=user2.id, movie_id=movie2.id, rental_date=1631990400, return_date=1632595200)
#         rental3 = RentalTransaction(user_id=user1.id, movie_id=movie3.id, rental_date=1631990400, return_date=None)

#         # Add objects to session
#         db.session.add_all([user1, user2, movie1, movie2, movie3, rental1, rental2, rental3])

#         # Commit the session to persist data
#         db.session.commit()

# # Execute seed data creation function
# if __name__ == '__main__':
#     create_seed_data()

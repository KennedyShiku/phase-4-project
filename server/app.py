#app.py

from flask_migrate import Migrate
from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from flask_login import LoginManager, login_user, logout_user, login_required
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User, Movie, RentalTransaction
import secrets
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)
# Initialize Flask-Login
login_manager = LoginManager(app)

# Configuration for SQLAlchemy
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
secret_key = secrets.token_hex(16)
app.config["SECRET_KEY"] = secret_key 
# Initialize Flask-Migratw
migrate = Migrate(app, db)
db.init_app(app)


# Configuring the User loader function
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# user authenticTion resource
class LoginResource(Resource):
    def post(self):
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        user = User.query.filter_by(email=email).first()
        if user and check_password_hash(user.password_hash, password):
            login_user(user)
            return jsonify({'message': 'Logged in successfully'})
        else:
            return jsonify({'message': 'Invalid email or password'}), 401
# resource for logging out a user
class LogoutResource(Resource):
    @login_required
    def get(self):
        logout_user()
        return jsonify({'message': 'Logged out successfully'})
    
#  dashboard end point
class DashboardResource(Resource):
    # @login_required
    def get(self):
        movies = Movie.query.all()
        movie_list = []
        for movie in movies:
            movie_list.append({
                'id': movie.id,
                'title': movie.title,
                'genre': movie.genre,
                'release_year': movie.release_year,
                'stock': movie.stock
            })
        return jsonify({'movies': movie_list})


# resource for adding a user
class AddUser(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        if not username or not email or not password:
            return {'message': 'Incomplete data'}, 400

        if User.query.filter_by(email=email).first():
            return {'message': 'Email already exists'}, 400

        new_user = User(username=username, email=email, password_hash=generate_password_hash(password))
        db.session.add(new_user)
        db.session.commit()
        return {'message': 'User added successfully'}, 201


# Resource for updating user information
class UpdateUser(Resource):
    @login_required
    def patch(self, user_id):
        user = User.query.get(user_id)
        if not user:
            return {'message': 'User not found'}, 404

        data = request.get_json()
        new_username = data.get('username')
        new_email = data.get('email')
        new_password = data.get('password')

        if new_username:
            user.username = new_username
        if new_email:
            user.email = new_email
        if new_password:
            user.password_hash = generate_password_hash(new_password)

        db.session.commit()
        return {'message': 'User updated successfully'}, 200


# Resource for deleting users
class DeleteUser(Resource):
    @login_required
    def delete(self, user_id):
        user = User.query.get(user_id)
        if not user:
            return {'message': 'User not found'}, 404

        db.session.delete(user)
        db.session.commit()
        return {'message': 'User deleted successfully'}, 200
    

class AddMovieToRental(Resource):
    @login_required
    def post(self, user_id, movie_id):
        user = User.query.get(user_id)
        movie = Movie.query.get(movie_id)
        
        if not user or not movie:
            return {'message': 'User or movie not found'}, 404

        # Check if the movie is already in the rental transactions
        if movie in user.movies:
            return {'message': 'Movie already in rental transactions'}, 400

        rental_transaction = RentalTransaction(user_id=user_id, movie_id=movie_id)
        db.session.add(rental_transaction)
        db.session.commit()

        return {'message': 'Movie added to rental transactions successfully'}, 201


class RemoveMovieFromRental(Resource):
    @login_required
    def delete(self, user_id, movie_id):
        user = User.query.get(user_id)
        movie = Movie.query.get(movie_id)
        
        if not user or not movie:
            return {'message': 'User or movie not found'}, 404

        # Check if the movie is in the user's rental transactions
        rental_transaction = RentalTransaction.query.filter_by(user_id=user_id, movie_id=movie_id).first()
        if not rental_transaction:
            return {'message': 'Movie not found in rental transactions for the user'}, 404

        db.session.delete(rental_transaction)
        db.session.commit()

        return {'message': 'Movie removed from rental transactions successfully'}, 200


# Add resources to API endpoints

api.add_resource(AddUser, '/user')
api.add_resource(UpdateUser, '/user/<int:user_id>')
api.add_resource(DeleteUser, '/user/<int:user_id>')
api.add_resource(LoginResource, '/login')
api.add_resource(LogoutResource, '/logout')
api.add_resource(DashboardResource, '/dashboard')
api.add_resource(AddMovieToRental, '/user/<int:user_id>/rent/<int:movie_id>')
api.add_resource(RemoveMovieFromRental, '/user/<int:user_id>/rent/<int:movie_id>')



if __name__ == "__main__":
    app.run(port=5555, debug=True)

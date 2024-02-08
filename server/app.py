# app.py
from flask_migrate import Migrate, migrate
from flask import Flask, request
from models import db, User, Movie, RentalTransaction
from flask_restful import Api,Resource
from werkzeug.security import generate_password_hash


app = Flask(__name__)
api=Api(app)

# Configuration for SQLAlchemy
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
migrate = Migrate(app, db)
db.init_app(app)



#POST end ppoint to add users to system
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

        new_user = User(username=username, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()
        return {'message': 'User added successfully'}, 201


#patch end point to update user information
class UpdateUser(Resource):
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
    

class DeleteUser (Resource):
    def delete(self, user_id):
        user = User.query.get(user_id)
        if not user:
            return {'message':'User not found'}, 404
        
        db.session.delete(user)
        db.session.commit()
        return{'message': 'User deleted successfully'}, 200
    
class AllMovies(Resource):
    def get(self):
        movies = Movie.query.all()
        if not movies:
            return {'message': 'No movies found'}, 404

        movie_list = []
        for movie in movies:
            movie_list.append({
                'id': movie.id,
                'title': movie.title,
                'genre': movie.genre,
                'release_year': movie.release_year,
                'stock': movie.stock
            })

        return {'movies': movie_list}, 200

    
# Add resources to API endpoints
api.add_resource(AddUser, '/user')
api.add_resource(UpdateUser, '/user/<int:user_id>')
api.add_resource(DeleteUser, '/user/<int:user_id>')
api.add_resource(AllMovies, '/movies')
           






if __name__ == "__main__":
    app.run(port = 5555, debug = True)

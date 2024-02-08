# app.py
from flask_migrate import Migrate, migrate
from flask import Flask, request
from models import db, User, Movie, RentalTransaction
from flask_restful import Api,Resource

app = Flask(__name__)
api=Api(app)

# Configuration for SQLAlchemy
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
migrate = Migrate(app, db)
db.init_app(app)


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

# Add resources to API endpoints
api.add_resource(AddUser, '/user')

class DeleteUser(Resource):
    def delete(self):






if __name__ == "__main__":
    app.run(port = 5555, debug = True)

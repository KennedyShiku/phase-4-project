# seed.py
from faker import Faker
from models import db, Movie
import random
from app import app

# Generate random movie data using Faker
def generate_movie_data():
    fake = Faker()
    genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'SCI-FI', 'Thriller']

    with app.app_context():  # Ensure we're in the application context
        for _ in range(30):
            title = fake.catch_phrase()
            genre = random.choice(genres)
            release_year = random.randint(1980, 2022)
            stock = random.randint(1, 100)

            movie = Movie(title=title, genre=genre, release_year=release_year, stock=stock)
            db.session.add(movie)

        db.session.commit()

if __name__ == "__main__":
    generate_movie_data()
    print("Movie data seeded successfully.")

from werkzeug.security import generate_password_hash
from app.models import db, Format

# Adds a demo user, you can add other users here if you want


def seed_formats():

    short_story = Format(type='Short Story')
    poem = Format(type='Poem')
    db.session.add(short_story)
    db.session.add(poem)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_formats():
    db.session.execute('TRUNCATE formats CASCADE;')
    db.session.commit()

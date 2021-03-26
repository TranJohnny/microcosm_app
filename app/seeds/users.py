from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    demoUsers = [
        User(username='avidWriter', email='demo@aa.io',
             password='password', first_name='Maya', last_name='Reyn', exp=45),
        User(username='negativeNed', email='demo1@aa.io',
             password='despondentPoet', first_name='Ned', last_name='Travers'),
        User(username='mightyMight', email='demo2@aa.io',
             password='password', first_name='Thuy', last_name='Nguyen'),
        User(username='comicsLover', email='demo3@aa.io',
             password='password', first_name='Grainne', last_name='Adams'),
        User(username='superExplorer', email='demo4@aa.io',
             password='password', first_name='Beth', last_name='Lim'),
    ]

    for user in demoUsers:
        db.session.add(user)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()

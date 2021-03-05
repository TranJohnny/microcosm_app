from werkzeug.security import generate_password_hash
from app.models import db, Story

# Adds a demo user, you can add other users here if you want


def seed_stories():

    demoStories = [
        # superExplorer's Stories
        Story(title="My First Story", author_id=1),
        # negativeNed's Stories
        Story(title="A Winter's Night", parts=2, author_id=2, tier=2),
        Story(title="The Last Man", author_id=2),
        Story(title="Cold Embrace", author_id=2),
        Story(title="Isolation", author_id=2),
        # mightyMight's Stories
        Story(title="A Day in the Life", author_id=3),
        Story(title="Haiku", author_id=3),
        Story(title="Limerick", author_id=3),
        # comicLover's Stories
        Story(title="Power", parts=3, author_id=4),
        Story(title="The True Hero", author_id=4),
        # superExplorer's Stories
        Story(title="24 Hours", parts=3, author_id=5),
        Story(title="Blue Sunset", author_id=5),
    ]

    for story in demoStories:
        db.session.add(story)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_stories():
    db.session.execute('TRUNCATE stories CASCADE;')
    db.session.commit()

from flask.cli import AppGroup
from .users import seed_users, undo_users
from .stories import seed_stories, undo_stories
from app.models import db

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_stories()
    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_stories()
    db.session.execute('TRUNCATE subscription_tiers;')
    db.session.commit()
    # Add other undo functions here

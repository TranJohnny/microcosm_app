from werkzeug.security import generate_password_hash
from app.models import db, Micro_Story

# Adds a demo user, you can add other users here if you want


def seed_micro_stories():

    demo_micro_stories = [
        # My First Story
        Micro_Story(title="My First Micro_Story", part=1,
                    content="This is my first micro story.",
                    story_id=1,
                    format_id=1),
        # A Winter's Night
        Micro_Story(title="A Winter's Night: Part 1", part=1,
                    content="He traveled on a worn down road. He was, by all measures, alone.",  # noqa
                    story_id=2,
                    format_id=1),
        Micro_Story(title="A Winter's Night: Part 2", part=2,
                    content="When the birds would have sung, the sun did not rise. It would be a long night.",  # noqa
                    story_id=2,
                    format_id=1),
        # The Last Man
        Micro_Story(title="The Last Man", part=1,
                    content="The last man on earth sat quietly in his room. There was a knock on the door.",  # noqa
                    story_id=3,
                    format_id=1),
        # Cold Embrace
        Micro_Story(title="Cold Embrace", part=1,
                    content="He was quiet and somber when the cold night took him.",  # noqa
                    story_id=4,
                    format_id=1),
        # Isolation
        Micro_Story(title="Isolated", part=1,
                    content="Lonely. I am so lonely.",  # noqa
                    story_id=5,
                    format_id=1),
        # A Day in the Life
        Micro_Story(title="Sunny Days", part=1,
                    content="On wednesdays I wear pink!",  # noqa
                    story_id=6,
                    format_id=1),
        # Meditation on Trees
        Micro_Story(title="Young Sapling", part=1,
                    content="Cold winter sapling.\n So easily trampled now.\n Rise into the sky.",  # noqa
                    story_id=7,
                    format_id=2),
        # Limerick
        Micro_Story(title="Fantastic Mr. Fox", part=1,
                    content="Boggis, Bunce, and Bean;\n One fat, one short, one lean.\n These horrible crooks, so different in looks, are nonetheless equally mean...",  # noqa
                    story_id=8,
                    format_id=2),
        # Power
        Micro_Story(title="Awakening", part=1,
                    content="When she stepped out of bed, her feet did not touch the ground.",  # noqa
                    story_id=9,
                    format_id=1),
        Micro_Story(title="Dream", part=2,
                    content="With the sudden realization of what she could do, she hovered to the window.",  # noqa
                    story_id=9,
                    format_id=1),
        Micro_Story(title="Flight", part=3,
                    content="She took one last look at her tiny room, and flew into the waiting clouds.",  # noqa
                    story_id=9,
                    format_id=1),
        # The True Hero
        Micro_Story(title="Excalibur", part=1,
                    content="With a powerful force, they drew the sword from the stone. With no one around to see, they placed it back. They didn't want the responsibility, after all.",  # noqa
                    story_id=10,
                    format_id=1),
        # 24 Hours
        Micro_Story(title="03:00", part=1,
                    content="She awoke with a cold sweat. How had she wound up in this coffin?",  # noqa
                    story_id=11,
                    format_id=1),
        Micro_Story(title="14:00", part=2,
                    content="Would further screaming do any good? She could hardly make a sound and her bloody hands couldn't strike the lid any longer.",  # noqa
                    story_id=11,
                    format_id=1),
        Micro_Story(title="23:59", part=3,
                    content=f'Suddenly a voice. "Fire up the incinerator."',  # noqa
                    story_id=11,
                    format_id=1),
        # Blue Sunset
        Micro_Story(title="On Mars", part=1,
                    content="He didn't believe me when I said the sky was green on Mars. That there was life on Mars. That water ran on Mars. After all, he didn't believe that I had been on Mars.",  # noqa
                    story_id=12,
                    format_id=2),
    ]

    for micro_story in demo_micro_stories:
        db.session.add(micro_story)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_micro_stories():
    db.session.execute('TRUNCATE micro_stories CASCADE;')
    db.session.commit()

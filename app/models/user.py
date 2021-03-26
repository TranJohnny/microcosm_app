from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime
from sqlalchemy.ext.declarative import declarative_base
# from .subscription_tier import Subscription_Tier
from .micro_story import Micro_Story
from .story import Story

Base = declarative_base()

followers = db.Table('followers',
                     db.Column('follower_id', db.Integer,
                               db.ForeignKey('users.id')),
                     db.Column('followed_id', db.Integer,
                               db.ForeignKey('users.id')),
                     db.Column('tier', db.Integer, default=0)
                     )


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    coins = db.Column(db.Integer, nullable=False, default=1000)
    level = db.Column(db.Integer, nullable=False, default=1)
    exp = db.Column(db.Integer, nullable=False, default=0)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime)

    stories = db.relationship(
        "Story", back_populates="users", cascade="all, delete-orphan")
    likes = db.relationship("Like", cascade="all, delete-orphan")
    comments = db.relationship("Comment", cascade="all, delete-orphan")
    followed = db.relationship(
        "User",
        secondary=followers,
        primaryjoin=(followers.c.follower_id == id),
        secondaryjoin=(followers.c.followed_id == id),
        backref=db.backref('followers', lazy='dynamic'),
        lazy='dynamic'
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        dict = {
            "id": self.id,
            "username": self.username,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "coins": self.coins,
            "level": self.level,
            "exp": self.exp,
            "created_at": self.created_at
        }
        if self.followed:
            dict["followed"] = [user.username for user in self.followed]
        if self.stories:
            dict["stories"] = {}
            for story in self.stories:
                dict["stories"][story.id] = {"id": story.id,
                                             "title": story.title,
                                             "parts": story.parts,
                                             "tier": story.tier}
        return dict

    def to_public_dict(self):
        dict = {
            "id": self.id,
            "username": self.username,
            "level": self.level,
            "created_at": self.created_at
        }
        return dict

    def followed_users(self):
        return User.query\
            .join(followers, (followers.c.followed_id == User.id))\
            .filter(followers.c.follower_id == self.id)  # noqa

    def followed_micro_stories(self):
        return Micro_Story.query\
            .join(Story, (Story.id == Micro_Story.story_id))\
            .join(User, (User.id == Story.author_id))\
            .join(followers, (Story.author_id == followers.c.followed_id))\
            .filter(followers.c.follower_id == self.id, followers.c.tier >= Story.tier).order_by(Micro_Story.created_at.desc())  # noqa

    def follow(self, user):
        if not self.is_following(user):
            self.followed.append(user)
            db.session.commit()
            return self

    def unfollow(self, user):
        if self.is_following(user):
            self.followed.remove(user)
            db.session.commit()
            return self

    def unfollow(self, user):
        if self.is_following(user):
            self.followed.remove(user)
            return self

    def is_following(self, user):
        return self.followed.filter(followers.c.followed_id
                                    == user.id).count() > 0

    def followed_stories(self):
        return Story.query.join(followers, (followers.c.followed_id == Story.user_id)).filter(followers.c.follower_id == self.id).order_by(Story.created_at.desc())  # noqa

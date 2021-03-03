from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime
from .subscription import Subscription


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
    following = db.relationship(
        "Subscription",
        primaryjoin=(Subscription.follower_id == id),
        secondaryjoin=(Subscription.creator_id == id),
        back_populates='users', cascade="all, delete-orphan")
    followers = db.relationship(
        "Subscription",
        primaryjoin=(Subscription.creator_id == id),
        secondaryjoin=(Subscription.follower_id == id),
        back_populates='users', cascade="all, delete-orphan")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "coins": self.coins,
            "level": self.level,
            "exp": self.exp,
            "created_at": self.created_at
        }

    def follow(self, user):
        if not self.is_following(user):
            self.following.append(user)
            return self

    def unfollow(self, user):
        if self.is_following(user):
            self.following.remove(user)
            return self

    def is_following(self, user):
        return self.following.filter(Subscription.follower_id
                                     == user.id).count() > 0

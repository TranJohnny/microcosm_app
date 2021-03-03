from .db import db
from datetime import datetime


class Subscription(db.Model):
    __tablename__ = 'subscriptions'
    id = db.Column(db.Integer, primary_key=True)
    follower_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', onupdate="CASCADE", ondelete="CASCADE"), nullable=False)
    creator_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', onupdate="CASCADE", ondelete="CASCADE"), nullable=False)
    tier = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime)

    follower = db.relationship("User", back_populates="subscriptions")
    creator = db.relationship("User", back_populates="subscriptions")

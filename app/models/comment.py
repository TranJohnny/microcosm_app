from .db import db
from datetime import datetime


class Comment(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', onupdate="CASCADE", ondelete="CASCADE"), nullable=False)
    comment_id = db.Column(db.Integer, nullable=False)
    comment_type = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.now())

    user = db.relationship("User", back_populates="likes")

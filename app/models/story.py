from .db import db
from datetime import datetime


class Story(db.Model):
    __tablename__ = 'stories'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    tier = db.Column(db.Integer, default=0)
    parts = db.Column(db.Integer, default=1)
    author_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', onupdate="CASCADE", ondelete="CASCADE"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime)

    users = db.relationship("User", back_populates="stories")
    micro_stories = db.relationship("Micro_Story", back_populates="story")

    def to_dict(self):
        dict = {
            "id": self.id,
            "title": self.title,
            "tier": self.tier,
            "parts": self.parts,
            "author_id": self.author_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }
        if self.users:
            dict["users"] = self.users.to_public_dict()
        return dict

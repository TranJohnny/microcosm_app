from .db import db
from datetime import datetime


class Micro_Story(db.Model):
    __tablename__ = 'micro_stories'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    part = db.Column(db.Integer)
    content = db.Column(db.Text)
    story_id = db.Column(db.Integer, db.ForeignKey(
        'stories.id', onupdate="CASCADE", ondelete="CASCADE"), nullable=False)
    format_id = db.Column(db.Integer, db.ForeignKey(
        'formats.id', onupdate="CASCADE", ondelete="CASCADE"), nullable=False)
    # tier = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime)

    story = db.relationship("Story", back_populates="micro_stories")
    format = db.relationship("Format", back_populates="micro_stories")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "part": self.part,
            "content": self.content,
            "story_id": self.story_id,
            "format_id": self.format_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }

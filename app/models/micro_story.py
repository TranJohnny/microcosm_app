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
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime)

    story = db.relationship("Story", back_populates="micro_stories")
    format = db.relationship("Format", back_populates="micro_stories")
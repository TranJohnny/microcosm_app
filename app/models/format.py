from .db import db


class Format(db.Model):
    __tablename__ = 'formats'
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String, nullable=False)

    micro_stories = db.relationship("Micro_Story", back_populates="formats")

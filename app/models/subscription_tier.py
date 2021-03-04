# from .db import db
# from datetime import datetime


# class Subscription_Tier(db.Model):
#     __tablename__ = 'subscription_tiers'
#     id = db.Column(db.Integer, primary_key=True)
#     subscription_id = db.Column(db.String(20), nullable=False)
#     tier = db.Column(db.Integer, default=0)
#     created_at = db.Column(db.DateTime, default=datetime.now())
#     updated_at = db.Column(db.DateTime)


# follower = db.relationship("User", back_populates="subscriptions")
# creator = db.relationship("User", back_populates="subscriptions")

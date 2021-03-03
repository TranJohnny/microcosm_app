from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/subscriptions')
@login_required
def subscriptions(id):
    user = User.query.get(id)
    subscriptions = user.followed
    return subscriptions


@user_routes.route('/<int:id>/followers', methods=['POST'])
@login_required
def follow_user(id):
    data = request.json
    follower = User.query.get(data['id'])
    user = User.query.get(id)
    res = follower.follow(user)
    db.session.add(res)
    db.session.commit()
    return {"message": "Follow successful!"}

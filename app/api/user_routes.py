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
    subscriptions = user.followed_users().all()
    # print('Hello,', subscriptions)
    response = {}
    for each in subscriptions:
        response[each.to_dict()['id']] = (each.to_dict())
    return response


@user_routes.route('/<int:id>/followers', methods=['POST'])
@login_required
def follow_user(id):
    data = request.json
    follower = User.query.get(data['id'])
    user = User.query.get(id)
    res = follower.follow(user)
    if res is None:
        return {"error": "Uh oh, something went wrong."}
    db.session.add(res)
    db.session.commit()
    return {"message": "Follow successful!"}


@user_routes.route('/<int:id>/followers', methods=['DELETE'])
@login_required
def unfollow_user(id):
    data = request.json
    follower = User.query.get(data['id'])
    user = User.query.get(id)
    res = follower.unfollow(user)
    if res is None:
        return {"error": "Uh oh, something went wrong."}
    db.session.add(res)
    db.session.commit()
    return {"message": "Unfollow successful!"}


@user_routes.route('/<int:id>/followed_micro_stories')
@login_required
def followed_micro_stories(id):
    user = User.query.get(id)
    micro_stories = user.followed_micro_stories().all()
    list = [micro_story.to_dict() for micro_story in micro_stories]
    return jsonify(list)

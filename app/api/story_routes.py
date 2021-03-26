from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Story, db

story_routes = Blueprint('stories', __name__)


@story_routes.route('/<int:id>')
@login_required
def story(id):
    story = Story.query.get(id)
    list = [micro_story.to_dict() for micro_story in story.micro_stories]
    return jsonify(list)


@story_routes.route('/', methods=['POST'])
@login_required
def create_story():
    pass
    # data = request.json
    # follower = User.query.get(data['id'])
    # user = User.query.get(id)
    # res = follower.follow(user)
    # if res is None:
    #     return {"error": "Uh oh, something went wrong."}
    # db.session.add(res)
    # db.session.commit()
    # return {"message": "Follow successful!"}


@story_routes.route('/<int:storyId>', methods=['PATCH'])
@login_required
def update_story(storyId):
    pass
    # data = request.json
    # follower = User.query.get(data['id'])
    # user = User.query.get(id)
    # res = follower.follow(user)
    # if res is None:
    #     return {"error": "Uh oh, something went wrong."}
    # db.session.add(res)
    # db.session.commit()
    # return {"message": "Follow successful!"}

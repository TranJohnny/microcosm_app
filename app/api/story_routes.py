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

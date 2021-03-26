from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Story, Micro_Story, db
from datetime import datetime

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
    data = request.json
    story = Story(title=data["newStoryTitle"],
                  tier=data["tier"], author_id=data["author_id"], created_at=datetime.now())
    db.session.add(story)
    db.session.commit()
    db.session.flush()
    micro_story = Micro_Story(
        title=data["microStoryTitle"],
        part=1, content=data["content"],
        story_id=story.id, format_id=1)
    db.session.add(micro_story)
    db.session.commit()
    return {'Message': 'Success!', "storyId": story.id}


@story_routes.route('/<int:storyId>', methods=['POST'])
@login_required
def update_story(storyId):
    data = request.json
    print(data)
    story = Story.query.get(storyId)
    story.parts += 1
    db.session.add(story)
    db.session.commit()
    micro_story = Micro_Story(
        title=data["microStoryTitle"],
        content=data["content"],
        part=story.parts,
        story_id=storyId,
        format_id=1,
        created_at=datetime.now())
    db.session.add(micro_story)
    db.session.commit()
    return {"Message": "Success!", "partId": story.parts}

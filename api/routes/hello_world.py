from flask import Blueprint, jsonify, make_response


bp = Blueprint('hello_world', __name__, url_prefix='/api')


@bp.route('/')
def hello_world():
    return make_response(jsonify(message='Hello World')), 200

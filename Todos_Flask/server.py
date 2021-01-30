# Imports
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

# Initialize Flask 
app = Flask(__name__)
CORS(app)

# Variables
basedir = os.path.abspath(os.path.dirname(__file__))

# Database
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(basedir, "todos_flask.sqlite")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize database(db)
db = SQLAlchemy(app)

# Initialize Marshmallow(ma)
ma = Marshmallow(app)


# Todo Model
class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    isComplete = db.Column(db.Boolean(), default=False)

    def __init__(self, name, isComplete):
        self.name = name
        self.isComplete = isComplete


# Todo Schema
class TodoSchema(ma.Schema):
    class Meta:
        fields = ("id", "name", "isComplete")


# Initialize Schema
todo_schema = TodoSchema()
todos_schema = TodoSchema(many=True)


# POST
# Add a todo
@app.route("/api/todos/create/", methods=["POST"])
def add_todo():
    name = request.json["name"]
    isComplete = request.json["isComplete"]

    new_todo = Todo(name, isComplete)

    db.session.add(new_todo)
    db.session.commit()

    return todo_schema.jsonify(new_todo)


# GET
# Get all todos
@app.route("/api/todos/", methods=["GET"])
def get_all_todos():
    all_todos = Todo.query.all()
    result = todos_schema.dump(all_todos)
    return jsonify(result)


# GET
# Get a single todo
@app.route("/api/todos/<id>/detail/", methods=["GET"])
def get_single_todo(id):
    single_todo = Todo.query.get(id)
    return todo_schema.jsonify(single_todo)


# PUT
# Update a todo
@app.route("/api/todos/<id>/update/", methods=["PUT"])
def update_product(id):
    todo_to_be_updated = Todo.query.get(id)

    name = request.json["name"]
    isComplete = request.json["isComplete"]

    todo_to_be_updated.name = name
    todo_to_be_updated.isComplete = isComplete

    db.session.commit()

    return todo_schema.jsonify(todo_to_be_updated)


# DELETE
# Delete a todo
@app.route("/api/todos/<id>/delete/", methods=["DELETE"])
def delete_product(id):
    todo_to_be_deleted = Todo.query.get(id)

    db.session.delete(todo_to_be_deleted)
    db.session.commit()

    return todo_schema.jsonify(todo_to_be_deleted)


# Run server
if __name__ == "__main__":
    app.run(debug=True, port=3000)

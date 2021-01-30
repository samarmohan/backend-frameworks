// Imports
import express, { Application, Request, Response } from "express";
import mongoose, { Document } from "mongoose";
import cors from "cors";

// Variables
const Schema = mongoose.Schema;
const port: number = 8000;
const db: string = "mongodb://localhost/todos_express";

// Initialize Express
const app: Application = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Database
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log("Connected to database..."))
	.catch((err: Error) => console.log(err));

// Product Model
const TodoSchema = new Schema({
	name: {
		type: String,
		length: 100,
		required: true,
	},
	isComplete: {
		type: Boolean,
		required: true,
		default: false,
	},
});

const Todo = mongoose.model("Todos", TodoSchema);

// POST
// Adds a todo
app.post("/api/todos/create/", (req: Request, res: Response) => {
	const newTodo: Document = new Todo({
		name: req.body.name,
		isComplete: req.body.isComplete,
	});

	newTodo
		.save()
		.then((todo: Document) => res.json(todo))
		.catch((err: Error) => res.json(err));
});

// GET
// Get all todos
app.get("/api/todos/", (req: Request, res: Response) => {
	Todo.find()
		.then((allTodos: Document[]) => res.json(allTodos))
		.catch((err: Error) => res.json(err));
});

// GET
// Get a single todo
app.get("/api/todos/:name/detail/", (req: Request, res: Response) => {
	Todo.findOne({ name: req.params.name })
		.then((singleTodo: Document | null) => res.json(singleTodo))
		.catch((err: Error) => res.json(err));
});

// PUT
// Update a product
app.put("/api/todos/:name/update/", (req: Request, res: Response) => {
	Todo.findOneAndReplace({ name: req.params.name }, req.body, {
		new: true,
	})
		.then((todoToBeUpdated: Document | null) => res.json(todoToBeUpdated))
		.catch((err: Error) => res.json(err));
});

// DELETE
// Delete a product
app.delete("/api/todos/:name/delete/", (req, res) => {
	Todo.findOneAndDelete({ name: req.params.id })
		.then((todoToBeDeleted: Document | null) => res.json(todoToBeDeleted))
		.catch((err: Error) => res.json(err));
});

// Run server
app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}/`);
});

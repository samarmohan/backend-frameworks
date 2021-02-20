import { Injectable } from "@nestjs/common";
import { Todo } from "./interfaces/todo.interface";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateTodoDTO } from "./dto/todo.dto";

@Injectable()
export class TodosService {
	constructor(@InjectModel("Todo") private readonly todoModel: Model<Todo>) {}

	async findAll(): Promise<Todo[]> {
		return this.todoModel.find();
	}

	async findOne(id: string): Promise<Todo> {
		return this.todoModel.findById(id);
	}

	async create(todoToBeCreated: CreateTodoDTO): Promise<Todo> {
		const newTodo = new this.todoModel(todoToBeCreated);
		return await newTodo.save();
	}

	async delete(id: string): Promise<Todo> {
		return this.todoModel.findByIdAndRemove(id);
	}

	async update(id: string, todoToBeUpdated: Todo): Promise<Todo> {
		return this.todoModel.findByIdAndUpdate(id, todoToBeUpdated);
	}
}

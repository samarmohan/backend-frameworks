import { Injectable } from "@nestjs/common";
import { Todo } from "./interfaces/todo.interface";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateTodoDTO } from "./dto/todo.dto";

@Injectable()
export class TodosService {
	constructor(@InjectModel("Todo") private readonly todoModel: Model<Todo>) {}

	async findAll(): Promise<Todo[]> {
		return await this.todoModel.find();
	}

	async findOne(name: string): Promise<Todo> {
		return await this.todoModel.findOne({ name: name });
	}

	async create(todoToBeCreated: CreateTodoDTO): Promise<Todo> {
		const newTodo = new this.todoModel(todoToBeCreated);
		return await newTodo.save();
	}

	async delete(name: string): Promise<Todo> {
		return await this.todoModel.findOneAndRemove({ name });
	}

	async update(name: string, todoToBeUpdated: Todo): Promise<Todo> {
		return await this.todoModel.findOneAndReplace(
			{ name },
			todoToBeUpdated,
			{ new: true }
		);
	}
}

import {Body, Controller, Delete, Get, Param, Post, Put,} from "@nestjs/common";
import {CreateTodoDTO} from "./dto/todo.dto";
import {Todo} from "./interfaces/todo.interface";
import {TodosService} from "./todos.service";

@Controller("api/todos/")
export class TodosController {
	constructor(private readonly todosService: TodosService) {
	}

	@Get()
	async findAll(): Promise<Todo[]> {
		return await this.todosService.findAll();
	}

	@Get(":id/")
	findOne(@Param("id") id): Promise<Todo> {
		return this.todosService.findOne(id);
	}

	@Post("")
	create(@Body() todoToBeCreated: CreateTodoDTO): Promise<Todo> {
		return this.todosService.create(todoToBeCreated);
	}

	@Delete(":id/")
	delete(@Param("id") id): Promise<Todo> {
		return this.todosService.delete(id);
	}

	@Put(":id/")
	update(@Param("id") id, @Body() todoToBeUpdated: Todo): Promise<Todo> {
		return this.todosService.update(id, todoToBeUpdated);
	}
}

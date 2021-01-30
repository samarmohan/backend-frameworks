import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Body,
	Param,
} from "@nestjs/common";
import { CreateTodoDTO } from "./dto/todo.dto";
import { Todo } from "./interfaces/todo.interface";
import { TodosService } from "./todos.service";

@Controller("api/todos/")
export class TodosController {
	constructor(private readonly todosService: TodosService) {}

	@Get()
	async findAll(): Promise<Todo[]> {
		return await this.todosService.findAll();
	}

	@Get(":name/detail/")
	findOne(@Param("name") name): Promise<Todo> {
		return this.todosService.findOne(name);
	}

	@Post("create/")
	create(@Body() todoToBeCreated: CreateTodoDTO): Promise<Todo> {
		return this.todosService.create(todoToBeCreated);
	}

	@Delete(":name/delete/")
	delete(@Param("name") name): Promise<Todo> {
		return this.todosService.delete(name);
	}

	@Put(":name/update/")
	update(@Param("name") name, @Body() todoToBeUpdated: Todo): Promise<Todo> {
		return this.todosService.update(name, todoToBeUpdated);
	}
}

package com.samarmohan.todosspringboot.todos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping(path = "api/todos/")
public class TodoController {

    private final TodoService todoService;

    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public Iterable<Todo> getTodos() {
        return todoService.getTodos();
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        return todoService.addTodo(todo);
    }

    @DeleteMapping(path = "{todoId}")
    public void deleteTodo(@PathVariable("todoId") Long todoId) {
        todoService.deleteTodo(todoId);
    }

    @PutMapping(path = "{todoId}")
    public Todo updateTodo(
            @PathVariable("todoId") Long todoId,
            @RequestBody() Todo todo
    ) {
        return todoService.updateTodo(todoId, todo);
    }

    @GetMapping(path = "{todoId}")
    public Todo getSingleTodo(@PathVariable("todoId") Long todoId) {
        return todoService.getSingleTodo(todoId);
    }
}

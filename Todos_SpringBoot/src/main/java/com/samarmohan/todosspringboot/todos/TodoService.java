package com.samarmohan.todosspringboot.todos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TodoService {

	private final TodoRepository todoRepository;

	@Autowired
	public TodoService(TodoRepository todoRepository) {
		this.todoRepository = todoRepository;
	}

	public Iterable<Todo> getTodos() {
		return todoRepository.findAll();
	}

	public Todo addTodo(Todo todo) {
		return todoRepository.save(todo);
	}

	public void deleteTodo(Long todoId) {
		boolean exists = todoRepository.existsById(todoId);
		if (!exists) {
			throw new IllegalStateException("Todo with id of " + todoId + " does not exist");
		}
		todoRepository.deleteById(todoId);
	}

	public Todo updateTodo(Long todoId, Todo todoDetails) {
		Todo todo =
				todoRepository
						.findById(todoId)
						.orElseThrow(() -> new IllegalStateException("Todo with id of " + todoId + " does not exist"));

		todo.setName(todoDetails.getName());
		todo.setIsComplete(todoDetails.getIsComplete());
		return todoRepository.save(todo);
	}

	public Todo getSingleTodo(Long todoId) {
		return todoRepository
				.findById(todoId)
				.orElseThrow(() -> new IllegalStateException("Todo with id of " + todoId + " does not exist"));
	}
}

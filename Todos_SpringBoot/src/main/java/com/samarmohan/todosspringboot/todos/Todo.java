package com.samarmohan.todosspringboot.todos;


import javax.persistence.*;

@Entity
@Table
public class Todo {
	@SequenceGenerator(
			name = "todos_springboot_seq",
			sequenceName = "todos_springboot_seq",
			allocationSize = 1
	)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "todos_springboot_seq"
	)
	@Id
	private Long id;
	private String name;
	private Boolean isComplete;

	public Todo() {
	}

	public Todo(Long id, String name, Boolean isComplete) {
		this.id = id;
		this.name = name;
		this.isComplete = isComplete;
	}

	public Todo(String name, Boolean isComplete) {
		this.name = name;
		this.isComplete = isComplete;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Boolean getIsComplete() {
		return isComplete;
	}

	public void setIsComplete(Boolean isComplete) {
		this.isComplete = isComplete;
	}
}

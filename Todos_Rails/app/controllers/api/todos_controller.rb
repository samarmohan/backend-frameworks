class Api::TodosController < ApplicationController
	before_action :find_todo, only: [:show, :update, :destroy]

	def index
		todos = Todo.all
		render json: todos
	end

	def show
		render json: @todo, status: 200
	end

	def create
		todo_to_be_created = Todo.new(todo_params)
		if todo_to_be_created.save
			render json: @todo, status: 200
		else
			render error: { error: "Unable to create todo" }, status: 400
		end
	end

	def update
		if @todo
			@todo.update(todo_params)
			render json: @todo, status: 200
		else
			render error: { error: "Unable to create todo" }, status: 404
		end
	end

	def destroy
		if @todo
			@todo.destroy
			render json: { success: "Deleted Todo" }, status: 200
		else
			render error: { error: "Unable to delete todo" }, status: 404
		end
	end

	private

	def todo_params
		params.require(:todo).permit(:name, :isComplete)
	end

	def find_todo
		@todo = Todo.find(params[:id])
	end
end

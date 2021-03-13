defmodule TodosPhoenix.Api.Todo do
  use Ecto.Schema
  import Ecto.Changeset

  schema "todos" do
    field :isComplete, :boolean, default: false
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(todo, attrs) do
    todo
    |> cast(attrs, [:name, :isComplete])
    |> validate_required([:name, :isComplete])
  end
end

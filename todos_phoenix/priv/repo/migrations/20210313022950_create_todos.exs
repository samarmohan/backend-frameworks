defmodule TodosPhoenix.Repo.Migrations.CreateTodos do
  use Ecto.Migration

  def change do
    create table(:todos) do
      add :name, :string
      add :isComplete, :boolean, default: false, null: false

      timestamps()
    end

  end
end

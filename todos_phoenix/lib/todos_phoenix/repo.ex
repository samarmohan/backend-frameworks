defmodule TodosPhoenix.Repo do
  use Ecto.Repo,
    otp_app: :todos_phoenix,
    adapter: Ecto.Adapters.Postgres
end

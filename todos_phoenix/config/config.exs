# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :todos_phoenix,
  ecto_repos: [TodosPhoenix.Repo]

# Configures the endpoint
config :todos_phoenix, TodosPhoenixWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "Vw2CAy9zaqKpRQ1oZARvasSxc0wE8/LUXlBQLOkBO1sSs1TpjKUZjeGerWHtLiGa",
  render_errors: [view: TodosPhoenixWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: TodosPhoenix.PubSub,
  live_view: [signing_salt: "z0MYsKtr"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"

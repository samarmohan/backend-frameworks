defmodule TodosPhoenix.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      TodosPhoenix.Repo,
      # Start the Telemetry supervisor
      TodosPhoenixWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: TodosPhoenix.PubSub},
      # Start the Endpoint (http/https)
      TodosPhoenixWeb.Endpoint
      # Start a worker by calling: TodosPhoenix.Worker.start_link(arg)
      # {TodosPhoenix.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: TodosPhoenix.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    TodosPhoenixWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end

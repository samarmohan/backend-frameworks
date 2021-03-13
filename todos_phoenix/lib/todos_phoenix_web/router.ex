defmodule TodosPhoenixWeb.Router do
  use TodosPhoenixWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :browser do
    plug :accepts, ["html"]
  end

  scope "/api", TodosPhoenixWeb do
    pipe_through :api

    resources "/todos", TodoController, except: [:new, :edit]
  end

  scope "/", TodosPhoenixWeb do
    pipe_through :browser

    get "/", PagesController, :index
  end

  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through [:fetch_session, :protect_from_forgery]
      live_dashboard "/dashboard", metrics: TodosPhoenixWeb.Telemetry
    end
  end
end

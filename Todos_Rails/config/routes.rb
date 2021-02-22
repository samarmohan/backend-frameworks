Rails.application.routes.draw do
    root 'home#index'

    namespace :api do
        resources :todos
    end
end

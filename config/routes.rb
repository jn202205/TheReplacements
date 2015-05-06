Rails.application.routes.draw do
  root to: 'static_pages#dashboard'

  get 'landing', to: 'static_pages#landing'

  resources :users, only: [:new, :create, :edit]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :update], path: '/players'
    resources :sports, only: [:index, :show]
    resources :games, only: [:index, :show, :create]
  end
end

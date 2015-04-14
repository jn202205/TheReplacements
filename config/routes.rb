Rails.application.routes.draw do
  root to: 'static_pages#landing'

  get 'landing', to: 'static_pages#landing'
  get 'dashboard', to: 'static_pages#dashboard'

  resources :users, only: [:new, :create, :edit]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :update], path: '/players'
    resources :sports, only: [:index, :show]
  end
end

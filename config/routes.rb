Rails.application.routes.draw do
  get 'analytics', to: 'search_logs#analytics'

  resources :articles do
    get :search, on: :collection
  end
end

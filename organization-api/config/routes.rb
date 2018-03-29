Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :employees
      get '/nested_resources', to: 'employees#index2'
    end
  end
end

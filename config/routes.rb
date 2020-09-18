Rails.application.routes.draw do
  root 'static#index'
  
  get '/api/articles', to: 'articles#index'
end
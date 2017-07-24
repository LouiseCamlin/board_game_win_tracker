Rails.application.routes.draw do


  scope path: "api" do
    resources :games
    resources :players
    resources :wins
  end



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

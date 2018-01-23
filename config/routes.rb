Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'single_page_application#angular'
  match '*path' => 'single_page_application#angular', via: :get
end

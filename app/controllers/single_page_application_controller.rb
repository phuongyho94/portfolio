class SinglePageApplicationController < ActionController::Base
  def angular
    render 'layouts/application', layout: false
  end
end

class WinsController < ApplicationController

  def index
    wins = Win.all
    render :json => wins.to_json 
  end

end

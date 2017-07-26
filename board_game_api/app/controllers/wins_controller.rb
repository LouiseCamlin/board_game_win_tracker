class WinsController < ApplicationController

  def index
    wins = Win.all
    render(
        json: wins.to_json( {
          only: [:id, :date],
            include: [{
              player: {
                only: [:name]
              }
            },
            game: {
              only: [:title]
              }]
            })
        )
  end

  def create
   win = Win.create( win_params )
   render json: win, status: :created
  end


  private
  def win_params
    params.require([:player, :game]).permit([:name, :title])
  end

end

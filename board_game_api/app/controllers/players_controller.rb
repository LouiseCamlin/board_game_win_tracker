class PlayersController < ApplicationController

  def index
    players = Player.all
    render(
        json: players.to_json( {
          only: [:name, :id],
           include: {
              wins: {
                include: {
                  game: {
                    only: [:title, :created_at]
                  }
                },
                only: [:game_id]
              }
            }
          }
        )
      )
  end

  def show
    player = Player.find( params[:id] )
    render(
      json: player.to_json( {
        only: [:name, :id],
         include: {
            wins: {
              include: {
                game: {
                  only: [:title]
                }
              },
              only: [:game_id]
            }
          }
        }
      )
    )
  end

  def create
   player = Player.create( player_params )
   render json: player, status: :created
  end




  private
  def player_params
    params.require(:player).permit([:name])
  end

end

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
                    only: [:title]
                  }
                },
                only: [:game_id, :date]
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

  def update
    player = Player.find( params[:id] )
    if player.update_attributes(player_params)
      render json: player
    else
      render json: {status: :update_failed}
    end
  end

  def destroy
    player = Player.find( params[:id])
    if player.destroy!
      render json: {status: :success}
    else
      render json: {status: :delete_failed}
    end
  end



  private
  def player_params
    params.require(:player).permit([:name])
  end

end

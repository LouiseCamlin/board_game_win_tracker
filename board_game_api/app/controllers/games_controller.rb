class GamesController < ApplicationController

  def index
    games = Game.all
    render(
      json: games.to_json( {
        only: [:title, :id],
         include: {
            wins: {
              include: {
                player: {
                  only: [:name, :created_at]
                }
              },
              only: [:player_id]
            }
          }
        }
      )
    )
  end

  def show
    game = Game.find( params[:id] )
    render(
      json: game.to_json( {
        only: [:title, :id],
         include: {
            wins: {
              include: {
                player: {
                  only: [:name]
                }
              },
              only: [:player_id]
            }
          }
        }
      )
    )
  end

  def create
   game = Game.create( game_params )
   render json: game, status: :created
  end

  def update
    game = Game.find( params[:id] )
    if game.update_attributes(game_params)
      render json: game
    else
      render json: {status: :update_failed}
    end
  end

  def destroy
    game = Game.find( params[:id])
    if game.destroy!
      render json: {status: :success}
    else
      render json: {status: :delete_failed}
    end
  end



  private
  def game_params
    params.require(:game).permit([:title])
  end

end

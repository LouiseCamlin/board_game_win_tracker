class GamesController < ApplicationController

  def index
    games = Game.all
    render :json => games.to_json()
  end

  def show
    game = Game.find( params[:id] )
    render( json: game.as_json( { include: :players } ) )
  end

end

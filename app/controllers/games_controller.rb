class GamesController < ApplicationController
  before_action :require_signed_in!
  wrap_parameters :game, {include: [:sport_id, :game_datetime, :lat, :lng, :details]}

  def index
    @games = Game.all
    render @games
  end

  def show
    @game = Game.find(params[:id])
    render json: @game
  end

  def create
    @game = current_user.games.new(game_params)

    if @game.save
      render :show, status: :created, location: @game
    else
      render json: @game.errors, status: :unprocessable_entity }
    end
  end


  private
  def game_params
    params.require(:game).permit(:sport_id, :game_datetime, :lat, :lng, :details)
  end
end

module Api
  class GamesController < ApplicationController
    before_action :require_signed_in!
    wrap_parameters :game, {include: [:sport_id, :game_datetime, :lat, :lng, :details]}

    def index
      @games = Game.all
    end

    def show
      @game = Game.find(params[:id])
    end

    def create
      @game = current_user.games.new(game_params)

      if @game.save
        render json: @game
      else
        render json: @game.errors, status: :unprocessable_entity
      end
    end

    private
    def game_params
      params.require(:game).permit(:sport_id, :game_datetime, :lat, :lng, :details)
    end
  end
end

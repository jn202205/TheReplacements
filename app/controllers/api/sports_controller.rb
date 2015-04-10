module Api
  class SportsController < ApplicationController
    def index
      @sports = Sport.all
    end

    def show
      @sport = Sport.find(params[:id])
      render json: @sport
    end
  end
end

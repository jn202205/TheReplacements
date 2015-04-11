module Api
  class SportsController < ApplicationController
    before_action :require_signed_in!

    def index
      @sports = Sport.all
    end

    def show
      @sport = Sport.find(params[:id])
      render json: @sport
    end
  end
end

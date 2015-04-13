module Api
  class SportsController < ApplicationController
    before_action :require_signed_in!

    def index
      limit = params[:limit].to_i
      if  limit > 0
        @sports = Sport.all.sample(limit)
      elsif params[:current_user] = true
        @sports = current_user.sports
      else
        @sports = Sport.all
      end
    end

    def show
      @sport = Sport.find(params[:id])
      render json: @sport
    end
  end
end

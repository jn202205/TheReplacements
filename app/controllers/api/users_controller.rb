module Api
  class UsersController < ApplicationController
    before_action :require_signed_in!
    wrap_parameters :user, {include: [:sport_ids, :playing_area, :experience]}

    def index
      limit = params[:limit].to_i
      if limit > 0
        @users = User.where(zipcode: current_user.zipcode)
                     .where.not(id: current_user.id)
                     .sample(limit)
      elsif params[:sport_id]
        @users = User.search(params[:sport_id])
      else
        @users = User.all
      end
    end

    def show
      @user = User.find(params[:id])
    end

    def update
      @user = current_user
      if @user.update(player_params)
        render json: @user
      else
        render json: @user.errors.fullmessages
      end
    end

    private
    def player_params
      params.require(:user).permit(:playing_area, :experience, sport_ids: [])
    end
  end
end

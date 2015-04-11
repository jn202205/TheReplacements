module Api
  class UsersController < ApplicationController
    before_action :require_signed_in!

    def index
      limit = params[:limit].to_i
      if limit > 0
        @users = User.where(zipcode: current_user.zipcode).sample(limit)
      else
        @users = User.all
        # @users = User.where(zipcode: current_user.zipcode)
      end
    end

    def show
      @user = User.find(params[:id])
    end
  end
end

module Api
  class UsersController < ApplicationController
    before_action :require_signed_in!

    def index
      limit = params[:limit].to_i
      if limit > 0
        @users = User.where(zipcode: current_user.zipcode)
                     .where.not(id: current_user.id)
                     .sample(limit)
      else
        @users = User.all
      end
    end

    def show
      @user = User.find(params[:id])
    end
  end
end

class StaticPagesController < ApplicationController
  before_action :require_signed_in!, only: [:dashboard]

  def landing
    if signed_in?
      redirect_to :dashboard
    end
  end

  def dashboard
  end

end

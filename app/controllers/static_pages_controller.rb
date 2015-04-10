class StaticPagesController < ApplicationController
  def landing
    if signed_in?
      redirect_to :dashboard
    end
  end

  def dashboard
  end

end

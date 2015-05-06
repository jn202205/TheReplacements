class StaticPagesController < ApplicationController
  def landing
    if signed_in?
      redirect_to :dashboard
    end
  end

  def dashboard
    unless signed_in?
      redirect_to :landing
    end
  end
end

class Api::CardsController < ApplicationController
  
  def index
    cards = Pokemon::Card.where(set: "Base")
    render json: cards
  end 
end

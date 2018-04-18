class Api::CardsController < ApplicationController
  
  def index
    cards = Pokemon::Card.where(page: 1, pageSize: 100)
    render json: cards
  end 
end

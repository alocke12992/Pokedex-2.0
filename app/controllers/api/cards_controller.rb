class Api::CardsController < ApplicationController
  before_action :authenticate_user!, only: [:my_cards, :create]
  before_action :set_card, only: [:destroy]
  
  def index
    cards = Pokemon::Card.where(set: "Base")
    render json: cards 
  end 

  def my_cards
    render json: current_user.cards
  end 

  def create
    card = Card.create(
      card: card_params,
      user_id: current_user.id
      )
    if card.save
      render json: card
    else 
      render json: {errors: cards.errors.full_messages.join(', ')}, satus: 422
    end
  end
  
  def destroy
    @card.destroy
  end

  private 

  def set_card
    @card = Card.find(params[:id])
  end 

  def card_params
    params.permit(
      :id, 
      :name, 
      :imageUrl, 
      :imageUrlHiRes, 
      :subtype, 
      :supertype, 
      :ability, 
      :hp, 
      :number, 
      :artist, 
      :rarity, 
      :series, 
      :set, 
      :setCode, 
      :nationalPokedexNumber, 
      :evolvesFrom, 
      :convertedRetreatCost, 
      :retreatCost, 
      :types, 
      :attacks, 
      :weaknesses, 
      :card
    )
  end 
end

class Api::TypesController < ApplicationController
  def types
    types = Pokemon::Type.all
    render json: types
  end 

  def subtypes
    subtypes = Pokemon::Subtype.all
    render json: subtypes
  end 

  def supertypes
    supertypes = Pokemon::Supertype.all
    render json: supertypes
  end
end

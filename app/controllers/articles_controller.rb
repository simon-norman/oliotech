class ArticlesController < ApplicationController
  def index
    response = HTTParty.get('https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v3.json')

    render json: response.body
  end
end
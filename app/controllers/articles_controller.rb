class ArticlesController < ApplicationController
  def index
    response = HTTParty.get('https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v3.json')
    parsed_articles = JSON.parse(response.body, :symbolize_names => true)

    articles = parsed_articles.map do |article|
      mapped_article = {
        id: article[:id],
        title: article[:title],
        user: {
          rating: article[:user][:rating][:rating],
          first_name: article[:user][:first_name],
          avatar: article[:user][:current_avatar]
        },
        location: article[:location],
        reactions: {
          views: article[:reactions][:views],
        },
        images: article[:images][0][:files]
      }
    end

    render json: articles
  end
end
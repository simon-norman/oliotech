class ArticlesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    response = HTTParty.get('https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v3.json')
    parsed_articles = JSON.parse(response.body, :symbolize_names => true)

    articles = parsed_articles.map do |article|
      db_article = Article.find_by id: article[:id]
      db_article = db_article.as_json.to_h.symbolize_keys
      likes = (db_article[:likes] || 0) + (article[:likes] || 0)
      
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
          likes: likes
        },
        images: article[:images][0][:files]
      }
    end

    render json: articles
  end

  def update
    render json: Article.add_like_or_create({ likes: params[:likes], id: params[:id] })
  end
end
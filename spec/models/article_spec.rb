require_relative './../../app/models/article.rb'

describe Article do
  let(:article_update) { { likes: 4, id: 10 } }

  before(:each) do
    Article.delete_all
  end

  context 'given an article has not yet been saved in the db' do
    it 'should, when upserting article with likes, create a new article with the likes and id' do
      Article.add_like_or_create(article_update)
      db_article = Article.find(10)

      expect(db_article.likes).to eq(article_update[:likes])
      expect(db_article.id).to eq(article_update[:id])
    end
  end

  context 'given an article has been saved in the db' do
    it 'should, when upserting article with likes, increment the article likes by one' do
      Article.create({ id: 10, likes: 2 })
      Article.add_like_or_create(article_update)
      db_article = Article.find(10)

      expect(db_article.likes).to eq(3)
      expect(db_article.id).to eq(article_update[:id])
    end
  end
end
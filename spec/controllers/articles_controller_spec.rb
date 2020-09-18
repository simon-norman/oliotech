require_relative './../../app/controllers/articles_controller.rb'
require_relative './../../app/models/article.rb'

describe ArticlesController do
  context 'given articles are available from external api' do
    let(:likes) { 5 }
    let(:db_article) { stub_model Article, :id => 5, :likes => likes }
    let(:article) { { 
      title: 'Box of tea', 
      location: { distance: 26.3 },
      reactions: { views: 15, likes: 1 },
      images: [{ files: { small: "https://imageurl.com" }}],
      user: { current_avatar: "https://userimage.com", first_name: 'Jean', rating: { rating: 5 } }
    }}
    let(:articles) { [article, article] }
    let(:http_response) { double('Response',:body => articles.to_json) }

    before(:each) do
      HTTParty.stub(:get).and_return(http_response)
      Article.stub(:find_by).and_return(db_article)   
      get :index 
    end

    it 'should return all articles' do
      returned_articles = JSON.parse(response.body, :symbolize_names => true)
      expect(returned_articles.size).to eq(articles.size)
    end

    it 'should provide article core info' do
      returned_articles = JSON.parse(response.body, :symbolize_names => true)
      expect(returned_articles[0][:title]).to eq(articles[0][:title])
      expect(returned_articles[0][:location]).to eq(articles[0][:location])
      expect(returned_articles[0][:reactions][:views]).to eq(articles[0][:reactions][:views])
    end

    it 'should provide article user info' do
      returned_articles = JSON.parse(response.body, :symbolize_names => true)
      expect(returned_articles[0][:user][:first_name]).to eq(articles[0][:user][:first_name])
      expect(returned_articles[0][:user][:rating]).to eq(articles[0][:user][:rating][:rating])
      expect(returned_articles[0][:user][:current_avatar]).to eq(articles[0][:user][:avatar])
    end

    it 'should provide article images' do
      returned_articles = JSON.parse(response.body, :symbolize_names => true)
      expect(returned_articles[0][:images]).to eq(articles[0][:images][0][:files])
    end

    it 'should retrieve stored likes from model for each article' do  
      returned_articles = JSON.parse(response.body, :symbolize_names => true)
      expect(returned_articles[0][:reactions][:likes]).to eq(likes)
    end
  end

  context 'when article is posted with likes' do
    it 'should create new article in db with likes' do
      allow(Article).to receive(:add_like_or_create)
      patch :update, params: { id: '5', likes: '10' }

      expect(Article).to have_received(:add_like_or_create).with({ id: '5', likes: '10'})
    end
  end
end
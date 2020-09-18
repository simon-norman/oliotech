require_relative './../../app/controllers/articles_controller.rb'
require 'rails_helper'

RSpec.describe ArticlesController do
  context 'given articles are available from external api' do
    let(:article) { { 
      title: 'Box of tea'
    }}
    let(:articles) { [article, article] }
    let(:http_response) { double('Response',:body => articles.to_json) }

    before(:each) do
      HTTParty.stub(:get).and_return(http_response)
      get :index 
    end

    it 'should return all articles' do
      returned_articles = JSON.parse(response.body, :symbolize_names => true)
      expect(returned_articles.size).to eq(articles.size)
    end

    it 'should provide article core info' do
      returned_articles = JSON.parse(response.body, :symbolize_names => true)
      expect(returned_articles[0][:title]).to eq(articles[0][:title])
    end
  end
end
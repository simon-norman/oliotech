class Article < ApplicationRecord
    def self.add_like_or_create(article)
      db_article = self.where(id: article[:id]).first
      if db_article
        updated_article = self.update(article[:id], { likes: db_article[:likes] + 1 })
      else
        updated_article = self.create(id: article[:id], likes: article[:likes])
      end
    end
  end
  
import React, { useState, useEffect } from 'react'
import { ArticleList } from './ArticleList';
import { OlioApi, Article } from '../services/olio-api';
import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { createGlobalStyle } from 'styled-components';

const config = {
  olioApi: {
    url: 'http://localhost:3000/api',
  }
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`

const olioApi = new OlioApi(applyCaseMiddleware(axios.create({ baseURL: config.olioApi.url })));

function App(): JSX.Element {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    olioApi.getArticles().then((articles) => setArticles(articles));
  }, []);

  async function onLike(id: string, likes: number): Promise<void> {
    const updatedArticles = articles.map((article) => {
      const likeUpdate = id === article.id ? likes : article.reactions.likes;

      return {
        ...article,
        reactions: {
          ...article.reactions,
          likes: likeUpdate,
        }
      }
    });

    setArticles(updatedArticles);
    olioApi.incrementLikes(id, likes)
  }

  return <>
    <ArticleList 
      articles={ articles }
      onLike={ onLike }
    />
    <GlobalStyle />
  </>
}

export default App
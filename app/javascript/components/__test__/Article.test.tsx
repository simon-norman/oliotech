import { render, screen, RenderResult } from '@testing-library/react';
import { ArticleView } from '../Article';
import React from 'react';

describe('Article', () => {
  const articleTitleText = 'Gluten free pasta';
  const distance = 0.4;
  const numberOfViews = 200;
  const userRating = 4.5;
  const userName = 'Gina';

  function renderArticle(): RenderResult {
    return render(<ArticleView 
      article={ {
        id: '1',
        location: {
          distance,
        },
        images: {
          medium: 'https://images.com/article-image'
        },
        title: articleTitleText,
        reactions: {
          views: numberOfViews,
        },
        user: {
          firstName: userName,
          rating: userRating,
        },
      } }
    />);
  }
  
  test('Show article name', () => {
    expect(renderArticle().getByText(articleTitleText)).toBeTruthy();
  });

  test('Show user name', () => {
    expect(renderArticle().getByText(userName)).toBeTruthy();
  });

  
  test('Show distance in miles', () => {
    expect(renderArticle().getByText(`${distance} miles away`)).toBeTruthy();
  });

  
  test('Show user rating', () => {
    expect(renderArticle().getByText(`${userRating}`)).toBeTruthy();
  });

  
  test('Show number of views', () => {
    expect(renderArticle().getByText(`${numberOfViews} views`)).toBeTruthy();
  });
});
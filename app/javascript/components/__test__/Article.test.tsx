import { render, screen, RenderResult } from '@testing-library/react'
import { ArticleView } from '../Article';
import React from 'react';

describe('Article', () => {
  const articleTitleText = 'Gluten free pasta';
  const distance = 0.4;
  const numberOfViews = 200;
  const userRating = 4.5;
  const userName = 'Gina';
  const likes = 5;
  const onLike = jest.fn();

  function renderArticle(): RenderResult {
    return render(<ArticleView 
      onLike={ onLike }
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
          likes,
        },
        user: {
          firstName: userName,
          rating: userRating,
          avatar: {
            small: 'https://images.com/userimage'
          }
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

  test('Show number of likes', () => {
    renderArticle();
    const likesView = screen.getByTestId('likes');
    expect(likesView.textContent).toBe(`${likes}`);
  });

  test('Call on like callback when likes clicked', () => {
    renderArticle();
    const likesView = screen.getByTestId('likes-container');
    likesView.click();
    expect(onLike.mock.calls.length).toBe(1);
  });
});
import { render, screen, RenderResult } from '@testing-library/react';
import { ArticleView } from '../Article';
import React from 'react';

describe('Article', () => {
  const articleTitleText = 'Gluten free pasta';

  function renderArticle(): RenderResult {
    return render(<ArticleView 
      article={ {
        title: articleTitleText,
      } }
    />);
  }
  
  test('Show article name', () => {
    expect(renderArticle().getByText(articleTitleText)).toBeTruthy();
  });
});
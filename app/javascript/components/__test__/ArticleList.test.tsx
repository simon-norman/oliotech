import { render, screen } from '@testing-library/react'
import { ArticleList } from '../ArticleList';
import React from 'react';

test('Display list of articles', async () => {
  const articleData = [
    { 
      title: 'Pastries', 
      user: { firstName: 'Simon', rating: 4, avatar: { small: '', original: '', large: '' } }, 
      location: { distance: 3 }, 
      reactions: { likes: 1, views: 5 },
      images: { medium: 'https://someurl.com' },
      id: '2'
    }, 
    { 
      title: 'Assorted toys', 
      user: { firstName: 'Sandra', rating: 1, avatar: { small: '', original: '', large: '' } }, 
      location: { distance: 5.4 }, 
      reactions: { likes: 10, views: 5 },
      images: { medium: 'https://someurl.com' },
      id: '1',
    }
  ];
  render(<ArticleList articles={ articleData } onLike={ () => {} } />);

  const articles = await screen.getAllByTestId('article');
  expect(articles.length).toBe(2);
});
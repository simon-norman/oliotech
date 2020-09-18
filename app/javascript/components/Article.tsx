import React from 'react';
import styled from 'styled-components';

export type Article = {
  title: string;
  id: string;
}

export type ArticleProps = {
  className?: string;
  article: Article;
};

export function ArticleView(props: ArticleProps): JSX.Element {
  const { article: { title }, className } = props;

  return <ArticleContainer className={ className } data-testid={'article'}>
    <Title>{title}</Title>
  </ArticleContainer>;
}


const ArticleContainer = styled.section`
  border-radius: 24px;
  box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.12);
`
export const removeDefaultTextStyles = `
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: normal;
  ${ removeDefaultTextStyles }
`;
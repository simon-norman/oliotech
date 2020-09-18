import React from 'react'
import { ArticleView } from './Article';
import styled from 'styled-components';
import { Article } from '../services/olio-api';

type ArticleListProps = {
  articles: Article[];
};

export function ArticleList(props: ArticleListProps): JSX.Element {
  return <ArticlesContainer>
    { props.articles.map((article, index) => (
      <StyledArticle
        key={ article.id }
        isFirst={ index === 0 }
        article={ article }
      />
    ))}
  </ArticlesContainer>;
}

const ArticlesContainer = styled.section`
  padding: 56px;
`;

const StyledArticle = styled(ArticleView)<{ isFirst: boolean }>`
  margin-top: ${ (props: { isFirst: boolean }) => props.isFirst ? '0' : '56px' }
`;
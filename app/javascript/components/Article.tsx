import React from 'react';
import styled from 'styled-components';
import { Article } from '../services/olio-api';

export type ArticleProps = {
  className?: string;
  article: Article;
};

export function ArticleView(props: ArticleProps): JSX.Element {
  const { article: { title, reactions: { views } }, className } = props;

  return <ArticleContainer className={ className } data-testid={'article'}>
    <ImageContainer>
      <ArticleImage src={ props.article.images.medium }/>
    </ImageContainer>
    <ArticleInfoContainer>
      <Title>{title}</Title>
      <Row>
        <AdditionalInfo>{ `${props.article.location.distance} miles away` }</AdditionalInfo>
        <NoOfViews>{ `${views} views` }</NoOfViews>
      </Row>
    </ArticleInfoContainer>
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

const ImageContainer = styled.div`
  width: 33%;
  height: 250px;
  position: relative;
`;

const ArticleImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const ArticleInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px;
`
const Row = styled.div`
  display: flex;
  align-items: center;
`;

const BaseText = styled.p`
  ${ removeDefaultTextStyles }
`;

const AdditionalInfo = styled(BaseText)`
  font-size: 1.6rem;
`;

const NoOfViews = styled(AdditionalInfo)`
  margin-left: 16px;
`;
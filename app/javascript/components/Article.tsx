import React from 'react';
import styled from 'styled-components';
import { Likes } from './Likes';
import { Article } from '../services/olio-api';
import { Rating } from './Rating';
import { removeDefaultTextStyles, BaseText } from './sharedStyles';

export type ArticleProps = {
  className?: string;
  article: Article;
  onLike: () => void;
};

export function ArticleView(props: ArticleProps): JSX.Element {
  const { article, className, onLike } = props;
  const  { title, reactions: { likes, views }, user: { rating, firstName, avatar } } = article;
  return <ArticleContainer className={ className } data-testid={'article'}>
    <ImageContainer>
      <Likes likes={ likes } onSelect={ () => onLike() }/>
      <ArticleImage src={ article.images.medium }/>
    </ImageContainer>
    <ArticleInfoContainer>
      <Title>{title}</Title>
      <SecondRow>
        <UserAvatar src={ avatar.small }/>
        <UserName>{ firstName }</UserName>
        { rating || rating === 0 
          ? <Rating rating={ rating } />
          : null
        }
      </SecondRow>
      <Row>
        <AdditionalInfo>{ `${article.location.distance} miles away` }</AdditionalInfo>
        <NoOfViews>{ `${views} views` }</NoOfViews>
      </Row>
    </ArticleInfoContainer>
  </ArticleContainer>;
}


const ArticleContainer = styled.section`
  border-radius: 24px;
  box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: stretch;
  overflow: hidden;
`

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

const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: normal;
  ${ removeDefaultTextStyles }
`;

const UserAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;

const UserName = styled(BaseText)`
  font-size: 1.7rem;
  margin-left: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const SecondRow = styled.div`
  display: flex;
  margin-top: 24px;
  margin-bottom: 24px;
  align-items: center;
`;

const AdditionalInfo = styled(BaseText)`
  font-size: 1.6rem;
`;

const NoOfViews = styled(AdditionalInfo)`
  margin-left: 16px;
`;
import React from 'react';
import styled from 'styled-components';
import { BaseText } from './sharedStyles';

export function Rating({ rating }: { rating: number }): JSX.Element {
  return <RatingContainer>
    <RatingImg src={ 'star-icon.jpg' } />
    <RatingNo>{ rating }</RatingNo>
  </RatingContainer>
}

const RatingImg = styled.img`
  width: 32px;
  height: 32px;
`;

const RatingNo = styled(BaseText)`
  font-size: 1.7rem;
  padding-left: 4px;
`;

const RatingContainer = styled.div`
  display: flex;
  margin-left: 16px;
  align-items: center;
`;
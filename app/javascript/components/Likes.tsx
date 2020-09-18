import styled from "styled-components";
import React from 'react';
import { BaseText } from "./sharedStyles";

type LikesProps = {
  likes: number;
  onSelect: () => void;
};

export function Likes(props: LikesProps): JSX.Element {
  return <LikeImageContainer data-testid={ 'likes-container' } onClick={ () => props.onSelect() }>
    <LikeImage src={ 'likes-icon-11.jpg' } />
    <LikesText data-testid={ 'likes' }>{ props.likes }</LikesText>
  </LikeImageContainer>
}

const LikeImageContainer = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  left: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
`;

const LikeImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

const LikesText = styled(BaseText)`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  margin-left: 8px;
`;
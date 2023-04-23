import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IReduxState, Stack } from '../../../../interface';
import {
  Container,
  ContentImage,
  ContentInfo,
  Description,
  MyXPContent,
  ReduceContent,
} from './styles';

export interface IStackTextBox extends Stack {}

export const StackTextBox: React.FC<IStackTextBox> = ({
  my_xp,
  description,
  image_url,
  title,
}) => {
  const { seeLess, seeMore } = useSelector(
    (state: IReduxState) => state.home,
  ).languageInformation.stacks;

  const [seeMoreState, setSeeMoreState] = useState(false);
  const [seeMoreXP, setSeeMoreXP] = useState(false);
  const descriptionFormation = !seeMoreState
    ? description.slice(0, 100) + ' ...'
    : description;
  const myXPFormation = !seeMoreXP ? my_xp.slice(0, 50) + ' ...' : my_xp;
  return (
    <Container>
      <ContentInfo>
        <h3>{title}</h3>
        <Description seeMore={seeMoreState}>{descriptionFormation}</Description>
        <ReduceContent onClick={() => setSeeMoreState(!seeMoreState)}>
          {!seeMoreState ? seeMore : seeLess}
        </ReduceContent>
        <MyXPContent seeMore={seeMoreXP}>{myXPFormation}</MyXPContent>
        <ReduceContent onClick={() => setSeeMoreXP(!seeMoreXP)}>
          {!seeMoreXP ? seeMore : seeLess}
        </ReduceContent>
      </ContentInfo>
      <ContentImage>
        <img src={image_url} alt="icon" />
      </ContentImage>
    </Container>
  );
};

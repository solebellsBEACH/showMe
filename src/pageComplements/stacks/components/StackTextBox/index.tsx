import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IReduxState } from '../../../../interface';
import {
  Container,
  ContentImage,
  ContentInfo,
  Description,
  MyXPContent,
  ReduceContent,
} from './styles';

export interface IStackTextBox {
  title: string;
  image: string;
  description: string;
  myXP: string;
}

export const StackTextBox: React.FC<IStackTextBox> = ({
  myXP,
  description,
  image,
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
  const myXPFormation = !seeMoreXP ? myXP.slice(0, 50) + ' ...' : myXP;
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
        <img src={image} alt="icon" />
      </ContentImage>
    </Container>
  );
};

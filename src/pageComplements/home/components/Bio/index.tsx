import React from 'react';
import { useSelector } from 'react-redux';
import { homeAssets } from '../../../../assets/home';

import { IReduxState } from '../../../../interface';
import { Container, Content, PerfilContainer } from './styles';

export const Bio = () => {
  const { languageInformation } = useSelector(
    (state: IReduxState) => state.application,
  );

  return (
    <Container>
      <PerfilContainer alt="PERFILIMAGE" src={homeAssets.perfilImage} />
      <Content>
        <h1>{languageInformation.homePage.bio[0]}</h1>
        <h2>{languageInformation.homePage.bio[1]}</h2>
        <br />
        <h2>{languageInformation.homePage.bio[2]}</h2>
      </Content>
    </Container>
  );
};

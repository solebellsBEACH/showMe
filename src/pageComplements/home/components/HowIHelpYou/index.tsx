import React from 'react';
import { useSelector } from 'react-redux';
import { homeAssets } from '../../../../assets/home';
import { IReduxState } from '../../../../interface';
import { Container, ContentBottom, ContentTop } from './styles';
import { Information } from '../InformationBox';

export function HowIHelpYou() {
  const { languageInformation } = useSelector(
    (state: IReduxState) => state.application,
  );

  return (
    <Container>
      <ContentTop>
        <img src={homeAssets.team_icon} alt="icon" />
        <h1>{languageInformation.homePage.howIHelpYou.label}</h1>
      </ContentTop>
      <ContentBottom>
        {languageInformation.homePage.howIHelpYou.context.map(e => (
          <Information {...e} />
        ))}
      </ContentBottom>
    </Container>
  );
}

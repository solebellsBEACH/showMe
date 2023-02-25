import React from 'react';
import { useSelector } from 'react-redux';
import { homeAssets } from '../../../../assets/home';
import { IReduxState } from '../../../../interface';
import { Container, InformationBox, ContentBottom, ContentTop } from './styles';

export function HowIHelpYou() {
  const { languageInformation } = useSelector(
    (state: IReduxState) => state.application,
  );

  interface IInformationProps {
    header: string;
    text: string;
  }
  const Information = ({ header, text }: IInformationProps) => {
    return (
      <InformationBox href='showMe/stacks'>
        <section>
          <div>
            <h2>{header}</h2>
          </div>
          <p>{text}</p>
        </section>
      </InformationBox>
    );
  };

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

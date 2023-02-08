import React from 'react'
import { useSelector } from 'react-redux';
import { IReduxState } from '../../../../interface';
import { Container, InformationBox, ContentBottom, ContentTop } from './styles'
import Icon from '../../../../assets/home/team_icon.svg'
import Image from 'next/image';

export function HowIHelpYou() {

  const { languageInformation } = useSelector(
    (state: IReduxState) => state.application,
  );

  interface IInformationProps {
    header: string;
    text: string;
  }
  const Information = () => {
    return <InformationBox>
      <section>
        <div>

          <h2>
            Criando novas soluções do zero
          </h2>
        </div>

        <p>Teve uma ótima ideia, mas sua equipe não tem tempo ou capacidade para entregar rapidamente? Cuidamos do processo - desde pesquisa de mercado, estratégia e percepções do cliente até design visual, desenvolvimento de software e testes de garantia de qualidade.</p>
      </section>
    </InformationBox>
  }

  return (
    <Container>
      <ContentTop>
        <Image src={Icon} alt='icon' />
        <h1>{languageInformation.homePage.howIHelpYou[0]}</h1>
      </ContentTop>
      <ContentBottom>
        <Information />
        <Information />
        <Information />
      </ContentBottom>
    </Container>
  )
}

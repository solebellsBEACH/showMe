import React from 'react';
import { IBio } from '../../interface';
import { Container, Content, PerfilContainer } from './styles';


export const Bio: React.FC<IBio & { aling?: 'left' | 'rigth' }> = ({ header, primaryText, secondaryText, aling = 'left', image_url }) => {
  return (
    <Container
      aling={aling}
      key={`BioComponent->${header}`}
    >
      <PerfilContainer alt="PERFILIMAGE" src={image_url} />
      <Content>
        <h1>{header}</h1>
        <h2>{primaryText}</h2>
        <br />
        <h2>{secondaryText}</h2>
      </Content>
    </Container>
  );
};

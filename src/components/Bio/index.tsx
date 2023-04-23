import React from 'react';
import { Document } from '../../interface';
import { Container, Content, PerfilContainer } from './styles';

interface BioProps extends Document {
  aling?: 'left' | 'rigth';
}

export const Bio: React.FC<BioProps> = ({
  header,
  primary_text,
  secondary_text,
  aling = 'left',
  image_url,
  has_effect = true,
}) => {
  return (
    <Container aling={aling} key={`BioComponent->${header}`}>
      <PerfilContainer
        style={has_effect ? { filter: 'grayscale(100%)' } : {}}
        alt="PERFILIMAGE"
        src={image_url}
      />
      <Content>
        <h1>{header}</h1>
        <h2>{primary_text}</h2>
        <br />
        <h2>{secondary_text}</h2>
      </Content>
    </Container>
  );
};

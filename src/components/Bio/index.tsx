import React from 'react';
import { IBio } from '../../interface';
import { Container, Content, PerfilContainer } from './styles';

export const Bio: React.FC<IBio & { aling?: 'left' | 'rigth' }> = ({
  header,
  eyebrow,
  primaryText,
  secondaryText,
  aling = 'left',
  image_url,
  hasEffect = true,
  tags,
}) => {
  return (
    <Container aling={aling} key={`BioComponent->${header}`}>
      <PerfilContainer
        style={hasEffect ? { filter: 'saturate(0.88) contrast(1.02)' } : {}}
        alt={header}
        src={image_url}
      />
      <Content>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{header}</h1>
        <p>{primaryText}</p>
        <p>{secondaryText}</p>
        {tags && tags.length > 0 && (
          <div className="tags">
            {tags.map(tag => (
              <span key={`${header}-${tag}`}>{tag}</span>
            ))}
          </div>
        )}
      </Content>
    </Container>
  );
};

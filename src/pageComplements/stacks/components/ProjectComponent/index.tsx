import { IProject } from '../../../../interface';

import { Container, Content, PerfilContainer } from './styles';

export const ProjectComponent: React.FC<
  IProject & { aling?: 'left' | 'rigth' }
> = ({
  header,
  primaryText,
  secondaryText,
  aling = 'left',
  image_url,
  hasEffect = true,
  tecnologies,
  role,
  period,
  result,
}) => {
  return (
    <Container aling={aling} key={`BioComponent->${header}`}>
      <PerfilContainer
        style={hasEffect ? { filter: 'saturate(0.9) contrast(1.04)' } : {}}
        alt={header}
        src={image_url}
      />
      <Content>
        <div className="meta">
          {role && <span>{role}</span>}
          {period && <span>{period}</span>}
        </div>
        <h1>{header}</h1>
        <p>{primaryText}</p>
        <p>{secondaryText}</p>
        {result && <div className="result">{result}</div>}
        {tecnologies && (
          <ul>
            {tecnologies.map((technology, index) => (
              <li key={`tecnologies-item-${index}`}>{technology}</li>
            ))}
          </ul>
        )}
      </Content>
    </Container>
  );
};

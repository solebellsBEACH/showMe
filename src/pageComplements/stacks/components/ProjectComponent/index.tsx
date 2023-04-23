import { Project } from '../../../../interface';

import { Container, Content, PerfilContainer } from './styles';
interface ProjectProps extends Project {
  aling?: 'left' | 'rigth'
}

export const ProjectComponent: React.FC<ProjectProps> = ({
  header,
  image_url,
  primary_text,
  secondary_text,
  tecnologies,
  aling = 'left',
  has_effect,
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
        {tecnologies && (
          <ul>
            {tecnologies.map((e, i) => (
              <li key={`tecnologies-item-${i}`}>{e}</li>
            ))}
          </ul>
        )}
      </Content>
    </Container>
  );
};

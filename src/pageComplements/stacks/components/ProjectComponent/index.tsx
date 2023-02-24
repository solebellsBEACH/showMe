import { IProject } from '../../../../interface';

import { Container, Content, PerfilContainer } from './styles';

export const ProjectComponent: React.FC<IProject & { aling?: 'left' | 'rigth' }> = ({
    header,
    primaryText,
    secondaryText,
    aling = 'left',
    image_url,
    hasEffect = true,
    tecnologies
}) => {
    return <Container aling={aling} key={`BioComponent->${header}`}>
        <PerfilContainer
            style={hasEffect ? { filter: 'grayscale(100%)' } : {}}
            alt="PERFILIMAGE"
            src={image_url}
        />
        <Content>
            <h1>{header}</h1>
            <h2>{primaryText}</h2>
            <br />
            <h2>{secondaryText}</h2>
            {tecnologies && <ul>
                {tecnologies.map((e, i) => <li key={`tecnologies-item-${i}`}>{e}</li>)}
            </ul>}
        </Content>
    </Container>
};

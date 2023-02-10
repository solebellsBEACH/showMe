import React from 'react'
import { Container, ContentImage, ContentInfo } from './styles';

export interface IStackTextBox {
    align?: 'left' | 'right';
    title: string;
    image: string;
    description: string;
    myXP: string;
    hobbieTemplate?: boolean;
}

export const StackTextBox: React.FC<IStackTextBox> = ({ myXP, description, image }) => {
    return (
        <Container>
            <ContentInfo>
                <h3>React Js</h3>
                <h1>Ganhe seis meses de Apple Music</h1>
                <h2>Incluído na compra de AirPods e produtos Beats selecionados*.</h2>
            </ContentInfo>
            <ContentImage>
                <img src={image} alt='icon' />
            </ContentImage>
        </Container>
    )
}

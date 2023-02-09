import Image from 'next/image';
import React from 'react'
import { Container, ContentImage, ContentInfo } from './styles';
import Icon from '../../../../assets/stacks/react.svg'

export interface IStackTextBox {
    align?: 'left' | 'right';
    title: string;
    description: string;
    myXP: string;
    hobbieTemplate?: boolean;
}

export const StackTextBox: React.FC<IStackTextBox> = ({ myXP, description }) => {
    return (
        <Container>
            <ContentInfo>
                <h3>React Js</h3>
                <h1>Ganhe seis meses de Apple Music</h1>
                <h2>Incluído na compra de AirPods e produtos Beats selecionados*.</h2>
            </ContentInfo>
            <ContentImage>
                <Image src={Icon} alt='icon' />
            </ContentImage>
        </Container>
    )
}

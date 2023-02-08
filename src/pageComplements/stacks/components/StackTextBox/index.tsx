import React from 'react'
import { Container } from './styles';

export interface IStackTextBox {
    align?: 'left' | 'right';
    title: string;
    subject?: string;
    description: string;
    myXP: string;
    hobbieTemplate?: boolean;
}

export const StackTextBox: React.FC<IStackTextBox> = (props) => {
    return (
        <Container>StackTextBox</Container>
    )
}

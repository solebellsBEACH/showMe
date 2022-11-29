import React from 'react'
import { Container } from './styles'

export interface ITextBoxProps {
    align?: 'left' | 'right'
}

export const TextBox = ({ align = 'left' }: ITextBoxProps) => {
    return (
        <Container>
        </Container>
    )
}
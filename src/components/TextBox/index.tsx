import { Divider, useMediaQuery } from '@mui/material'
import React from 'react'
import { Container, ImageBox, Content } from './styles'

export interface ITextBoxProps {
    align?: 'left' | 'right',
    title: string,
    description: string,
    myXP: string
}

export const TextBox = ({ align = 'left', description, title, myXP }: ITextBoxProps) => {
    const matches = useMediaQuery('(max-width:1250px)');

    return (
        <>
            <Container>
                {align === 'right' && matches && <ImageBox />}
                {align === 'left' && <ImageBox />}
                <Content>
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                    <h2>{myXP}</h2>
                </Content>
                {align === 'right' && !matches && <ImageBox />}
            </Container>
            <Divider
            />
        </>
    )
}
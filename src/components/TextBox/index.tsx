import { Divider, useMediaQuery } from '@mui/material'
import React from 'react'
import { Container, ImageContainer, Content } from './styles'
import { StaticImageData } from 'next/image'
export interface ITextBoxProps {
    align?: 'left' | 'right',
    title: string,
    description: string,
    myXP: string,
    image:StaticImageData
}

export const TextBox = ({ align = 'left', description, title, myXP, image}: ITextBoxProps) => {
    const matches = useMediaQuery('(max-width:1250px)');

    const Image = () => {
        return <ImageContainer
        unoptimized
            alt={'imageContainer' + title}
            src={image}
        />
    }

    return (
        <>
            <Container>
                {align === 'right' && matches && <Image />}
                {align === 'left' && <Image />}
                <Content>
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                    <h2>{myXP}</h2>
                </Content>
                {align === 'right' && !matches && <Image />}
            </Container>
            <Divider
            />
        </>
    )
}
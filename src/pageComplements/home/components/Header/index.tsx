import React from 'react'
import { BackgroundGif, Container } from './styles'
import gif from '../../../../assets/artifact.gif'

export const Header = () => {
    return (
        <Container>
           <BackgroundGif
           src={gif}
            />
        </Container>
    )
}
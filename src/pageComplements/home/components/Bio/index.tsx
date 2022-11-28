import React from 'react'
import { Container, Content, PerfilContainer } from './styles'
import perfil from '../../../../assets/perfilImage.jpg'
export const Bio = () => {
    return (
        <Container>
            <PerfilContainer
        src={perfil}
        />
            <Content></Content>
        </Container>
    )
}
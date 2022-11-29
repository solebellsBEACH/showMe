import React from 'react'
import { Container, Content, PerfilContainer } from './styles'
import perfil from '../../../../assets/perfilImage.jpg'
import { IReduxState } from '../../../../interface';
import { useSelector } from 'react-redux'

export const Bio = () => {
    const { languageInformation } = useSelector((state: IReduxState) => state.application);

    return (
        <Container>
            <PerfilContainer
                alt='PERFILIMAGE'
                src={perfil}
            />
            <Content>
                <h1>{languageInformation.homePage.bio[0]}</h1>
                <h2>{languageInformation.homePage.bio[1]}</h2>
                <br /><h2>{languageInformation.homePage.bio[2]}</h2>
            </Content>
        </Container>
    )
}
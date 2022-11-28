import React from 'react'
import { Container, Content, PerfilContainer } from './styles'
import perfil from '../../../../assets/perfilImage.jpg'
export const Bio = () => {
    return (
        <Container>
            <PerfilContainer
        src={perfil}
        />
            <Content>
                <h1>Desenvolvedor Pleno I</h1>
                <h2>Programo desde 2019, onde iniciei minhas aulas de lógica no Ifes. Sou uma pessoa bem comunicativa e tenho facilidade para trabalhar no contato ao cliente levantando requisitos, sem dificuldades para trabalhar em time. Trabalho atualmente de desenvolvedor Full Stack, com foco em Front-End na Empresa AdGrowth. </h2>
                <br/><h2>Durante esse período atuei em diversos projetos com uma atenção a mais em React Js, TypeScript e NodeJS, atualmente estou integralmente em um projeto mobile, trabalhando com React Native, oque tem sido o meu foco nos últimos meses.</h2>
            </Content>
        </Container>
    )
}
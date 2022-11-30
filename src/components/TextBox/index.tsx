import React from 'react'
import { Container, ImageBox, Content } from './styles'

export interface ITextBoxProps {
    align?: 'left' | 'right'
}

export const TextBox = ({ align = 'left' }: ITextBoxProps) => {
    return (
        <Container>
            {align === 'left' && <ImageBox />}
            <Content>
                <h1>Title</h1>
                <h2>Development of web applications with React, Ant Desing, Sass, Less, Css, integration of REST APIs, develop screens focused in UX specification. Git versioning control on Jira, GitHub, TFS, SCRUM methodology. Development of web applications with React, Ant Desing, Sass, Less, Css, integration of REST APIs, develop screens focused in UX specification. Git versioning control on Jira, GitHub, TFS, SCRUM methodology.</h2>
            </Content>
            {align === 'right' && <ImageBox />}
        </Container>
    )
}
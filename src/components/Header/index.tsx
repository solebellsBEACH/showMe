import React from 'react'
import { TextBox } from '../TextBox';
import { Container, StyledMenuIcon } from './styles'

interface IHeaderProps{
    handleOpenDrawer:()=>void;
    name:string;
}

export const Header = ({handleOpenDrawer, name}: IHeaderProps) => {

    return (
        <Container>
           <h1>{name}</h1>
           <StyledMenuIcon
           onClick={handleOpenDrawer}
           />

        </Container>
    )
}
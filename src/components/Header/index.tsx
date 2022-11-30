import React from 'react'
import { Container, StyledMenuIcon } from './styles'

interface IHeaderProps{
    handleOpenDrawer:()=>void;
}

export const Header = ({handleOpenDrawer}: IHeaderProps) => {

    const infos ={ 
        name:'Stacks'
    }

    return (
        <Container>
           <h1>{infos.name}</h1>
           <StyledMenuIcon
           onClick={handleOpenDrawer}
           />
        </Container>
    )
}
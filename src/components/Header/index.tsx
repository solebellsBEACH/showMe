import React from 'react'
import { Container, StyledMenuIcon } from './styles'

export const Header = () => {

    const infos ={ 
        name:'Stacks'
    }

    return (
        <Container>
           <h1>{infos.name}</h1>
           <StyledMenuIcon
           onClick={() =>{}}
           />
        </Container>
    )
}
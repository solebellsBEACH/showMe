import React from 'react'
import { Container, StyledLayersIcon } from './styles'

export interface IDrawerButtonProps{
    onClick:()=>void;
}

export const DrawerButton = ({onClick}: IDrawerButtonProps) => {
    return (
        <Container
        onClick={onClick}
        >
            <StyledLayersIcon/>
        </Container>
    )
}
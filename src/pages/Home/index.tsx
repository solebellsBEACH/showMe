import React from 'react';
import { Container } from '../../pageComplements/home/styles';
import { Bio, Header } from '../../pageComplements/home/components';

const HomeComponent = () => {
    return (
        <Container>
            <Header />
            <Bio/>
        </Container>
    )
}

export default HomeComponent;
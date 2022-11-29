import React, { useState } from 'react';
import { Container } from '../../pageComplements/home/styles';
import { Bio, Header } from '../../pageComplements/home/components';
import { TemplateDrawer } from '../../components';

const HomeComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(true)
    return (
        <>
            <TemplateDrawer openDrawer={openDrawer} />
            <Container>
                <Header />
                <Bio />
            </Container>
        </>
    )
}

export default HomeComponent;
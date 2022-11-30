import React, { useState } from 'react'
import { Header, TemplateDrawer } from '../../components';
import { Container } from '../../pageComplements/stacks/styles';

const stacks = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const handleOpenDrawer = () => {
        setOpenDrawer(true)
    }
    const handleCloseDrawer = () => {
        setOpenDrawer(false)
    }

    return (
        <>
            <TemplateDrawer
                anchor='right'
                actualPage='Stacks'
                openDrawer={openDrawer}
                onClose={handleCloseDrawer}
            />
            <Container>
                <Header handleOpenDrawer={handleOpenDrawer} />
            </Container>
        </>
    )
}

export default stacks
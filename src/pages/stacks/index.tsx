import React, { useState } from 'react'
import { Header, TemplateDrawer, TextBox } from '../../components';
import { Container, Content, PageTitle } from '../../pageComplements/stacks/styles';

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
                <Content>
                    <PageTitle>Stacks</PageTitle>
                <TextBox/>
                </Content>
            </Container>
        </>
    )
}

export default stacks
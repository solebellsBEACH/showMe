import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Footer, Header, TemplateDrawer, TextBox } from '../../components';
import { IReduxState } from '../../interface';
import { Container, Content, PageTitle } from '../../pageComplements/stacks/styles';

const hobbies = () => {

    const { languageInformation } = useSelector((state: IReduxState) => state.application)
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
                actualPage='Hobbies'
                openDrawer={openDrawer}
                onClose={handleCloseDrawer}
            />
            <Container>
                <Header 
                name='Hobbies'
                handleOpenDrawer={handleOpenDrawer} />
                <Content>
                    <PageTitle>Hobbies</PageTitle>
                    {languageInformation.hobbies.hobbiesDescription.map((e, i) => <TextBox
                        {...e}
                        align={i % 2 === 0 ? 'left' : 'right'} />)}
                </Content>
                <Footer/>
            </Container>
        </>
    )
}

export default hobbies
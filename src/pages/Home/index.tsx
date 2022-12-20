import React, { useState } from 'react';
import { Container } from '../../pageComplements/styles';
import { Bio, Header } from '../../pageComplements/home/components';
import { DrawerButton, Footer, TemplateDrawer } from '../../components';
import { useSelector } from 'react-redux'
import { IReduxState } from '../../interface';

const HomeComponent = () => {

    const applicationData = useSelector((state: IReduxState) => state.application);
    const [openDrawer, setOpenDrawer] = useState(false)
    const [showGif, setShowGif] = useState(false)
    
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
                actualPage='Home'
                openDrawer={openDrawer}
                onClose={handleCloseDrawer}
            />
            <Container>
                <title>Home</title>
                <Header
                    showGif={showGif}
                    setShowGif={setShowGif}
                />
                <Bio />
                <Footer/>
            </Container>
            <DrawerButton onClick={handleOpenDrawer} />
        </>
    )
}

export default HomeComponent;
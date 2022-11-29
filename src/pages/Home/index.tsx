import React, { useState } from 'react';
import { Container } from '../../pageComplements/home/styles';
import { Bio, Header } from '../../pageComplements/home/components';
import { DrawerButton, TemplateDrawer } from '../../components';
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
            <TemplateDrawer openDrawer={openDrawer}
                onClose={handleCloseDrawer}
            />
            <Container>
                <Header
                    showGif={showGif}
                    setShowGif={setShowGif}
                />
                {showGif && <Bio />}
            </Container>
            {showGif && <DrawerButton onClick={handleOpenDrawer} />}

        </>
    )
}

export default HomeComponent;
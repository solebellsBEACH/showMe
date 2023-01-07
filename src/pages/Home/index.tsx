import React, { useState } from 'react';
import { Container } from '../../pageComplements/styles';
import { Bio } from '../../pageComplements/home/components';
import {
  DrawerButton,
  Footer,
  IntroPages,
  TemplateDrawer,
} from '../../components';
import { useSelector } from 'react-redux';
import { IReduxState } from '../../interface';
import gif from '../../../src/assets/homeHeaderGif.gif';

const HomeComponent = () => {
  const { languageInformation } = useSelector(
    (state: IReduxState) => state.application,
  );

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <TemplateDrawer
        anchor="right"
        actualPage="Home"
        openDrawer={openDrawer}
        onClose={handleCloseDrawer}
      />
      <Container>
        <title>Home</title>
        <IntroPages
          gif={gif}
          message={languageInformation.homePage.header[0]}
        />
        <Bio />
        <Footer />
      </Container>
      <DrawerButton onClick={handleOpenDrawer} />
    </>
  );
};

export default HomeComponent;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import gif from '../../assets/homeHeaderGif.gif';
import {
  DrawerButton,
  Footer,
  IntroPages,
  TemplateDrawer,
} from '../../components';
import { IReduxState } from '../../interface';
import { Bio, HowIHelpYou } from '../../pageComplements/home/components';
import { Container } from '../../pageComplements/styles';

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
        <HowIHelpYou/>
        <Bio />
        <Footer />
      </Container>
      <DrawerButton onClick={handleOpenDrawer} />
    </>
  );
};

export default HomeComponent;

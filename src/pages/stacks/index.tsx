import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  DrawerButton,
  Footer,
  IntroPages,
  TemplateDrawer
} from '../../components';
import { IReduxState } from '../../interface';
import { StackTextBox, TimeLine } from '../../pageComplements/stacks/components';
import { StacksContent } from '../../pageComplements/stacks/styles';
import { Container, Content, PageTitle, } from '../../pageComplements/styles';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../../pageComplements/stacks/responsive';
import { stackAssets } from '../../assets/stacks';

const Stacks = () => {

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
        actualPage="Stacks"
        openDrawer={openDrawer}
        onClose={handleCloseDrawer}

      />
      <Container>
        <IntroPages gif={stackAssets.codeGif} message={languageInformation.stacks.header} />
        <Content>
          <StacksContent>
            <h1 className='title'>FrontEnd</h1>
            <Carousel
              className='carousel'
              responsive={responsive}
            >
              {languageInformation.stacks.stacksDescription.frontEndStacks.map((e, i) => (
                <StackTextBox
                  key={`StackTextBox${i}`}
                  {...e}
                />
              ))}
            </Carousel>
          </StacksContent>
        </Content>
        <Footer />
        <DrawerButton onClick={handleOpenDrawer} />
      </Container>
    </>
  );
};

export default Stacks;

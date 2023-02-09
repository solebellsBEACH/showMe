import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import gif from '../../assets/stacks/codeGif.gif';
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
import { Carousel } from '@trendyol-js/react-carousel';

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
        <IntroPages gif={gif} message={languageInformation.stacks.header} />
        <Content>
          <PageTitle>Stacks</PageTitle>
          <TimeLine />
          <StacksContent>
            <h1 className='title'>FrontEnd</h1>
            <Carousel
              className='carousel'
              show={3}
              slide={1}
              swiping
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

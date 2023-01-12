import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import gif from '../../assets/stacks/codeGif.gif';
import {
  DrawerButton,
  Footer,
  IntroPages,
  TemplateDrawer,
  TextBox,
} from '../../components';
import { IReduxState } from '../../interface';
import { TimeLine } from '../../pageComplements/stacks/components';
import { Container, Content, PageTitle } from '../../pageComplements/styles';

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
          {languageInformation.stacks.stacksDescription.map((e, i) => (
            <TextBox
              key={`TextBox${i}`}
              {...e}
              align={i % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </Content>
        <Footer />
        <DrawerButton onClick={handleOpenDrawer} />
      </Container>
    </>
  );
};

export default Stacks;

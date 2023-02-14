import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { hobbiesAssets } from '../../assets/hobbies';

import {
  DrawerButton,
  Footer,
  IntroPages,
  TemplateDrawer,
  TextBox,
} from '../../components';
import { IReduxState } from '../../interface';
import {
  Container,
  Content,
  PageTitle,
} from '../../pageComplements/stacks/styles';

const Hobbies = () => {
  const useApplication = useSelector((state: IReduxState) => state.application);
  const { languageInformation } = useApplication;
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
        actualPage="Hobbies"
        openDrawer={openDrawer}
        onClose={handleCloseDrawer}
      />
      <Container>
        <IntroPages
          gif={hobbiesAssets.hobbieGif}
          message={languageInformation.hobbies.header}
        />
        <Content>
          <PageTitle>Hobbies</PageTitle>
          {languageInformation.hobbies.hobbiesDescription.map((e, i) => (
            <TextBox
              key={`TextBox${i}`}
              hobbieTemplate
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

export default Hobbies;

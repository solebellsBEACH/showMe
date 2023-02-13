import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  DrawerButton,
  Footer,
  IntroPages,
  TemplateDrawer,
} from '../../components';
import { IReduxState } from '../../interface';
import { StackTextBox } from '../../pageComplements/stacks/components';
import { StacksContent } from '../../pageComplements/stacks/styles';
import { Container, Content, ContentText } from '../../pageComplements/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
        <IntroPages
          gif={stackAssets.codeGif}
          message={languageInformation.stacks.header}
        />
        <ContentText>
          <p>{languageInformation.stacks.stacksDescription[0].myXP}</p>
          <img src={stackAssets.carrerAsset} alt="carrerAsset" />
        </ContentText>
        <Content>
          <StacksContent>
            <div className="title">Tecnologias que usei em minha carreira</div>
            <Carousel className="carousel" responsive={responsive}>
              {languageInformation.stacks.stacksDescription.map((e, i) => {
                return <StackTextBox key={`StackTextBox${i}`} {...e} />;
              })}
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

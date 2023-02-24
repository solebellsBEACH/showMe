import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Bio,
  DrawerButton,
  Footer,
  IntroPages,
  TemplateDrawer,
} from '../../components';
import { IReduxState } from '../../interface';
import { ProjectComponent, StackTextBox } from '../../pageComplements/stacks/components';
import { StacksContent } from '../../pageComplements/stacks/styles';
import { Container, Content, ContentText, BioContent } from '../../pageComplements/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../pageComplements/stacks/responsive';
import { stackAssets } from '../../assets/stacks';

const Stacks = () => {
  const { languageInformation } = useSelector(
    (state: IReduxState) => state.application,
  );
  const [openDrawer, setOpenDrawer] = useState(false);
  const [slideValue, setSlideValue] = useState(0);
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
        <title>Stacks</title>
        <IntroPages
          gif={stackAssets.codeGif}
          message={languageInformation.stacks.header}
        />
        <ContentText>
          <p>{languageInformation.stacks.stackContextText}</p>
          <img src={stackAssets.carrerAsset} alt="carrerAsset" />
        </ContentText>
        <Content>
          <StacksContent slideValue={slideValue}>
            <div className="title">
              {languageInformation.stacks.stacksTitle}
            </div>
            <Carousel
              beforeChange={e => setSlideValue(e)}
              className="carousel"
              responsive={responsive}
            >
              {languageInformation.stacks.stacksDescription.map((e, i) => {
                return <StackTextBox key={`StackTextBox${i}`} {...e} />;
              })}
            </Carousel>
          </StacksContent>
          <BioContent>
            <ProjectComponent />
          </BioContent>
        </Content>
        <Footer />
        <DrawerButton onClick={handleOpenDrawer} />
      </Container>
    </>
  );
};

export default Stacks;

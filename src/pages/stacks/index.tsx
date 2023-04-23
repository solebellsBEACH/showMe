import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  DrawerButton,
  Footer,
  IntroPages,
  TemplateDrawer,
} from '../../components';
import { IReduxState } from '../../interface';
import {
  ProjectComponent,
  StackTextBox,
} from '../../pageComplements/stacks/components';
import { StacksContent } from '../../pageComplements/stacks/styles';
import {
  Container,
  Content,
  ContentText,
  BioContent,
} from '../../pageComplements/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../pageComplements/stacks/responsive';
import { stackAssets } from '../../assets/stacks';
import { Creators as StackActions } from '../../store/ducks/stacks';

const Stacks = (props: any) => {
  const selector = useSelector((state: IReduxState) => state);
  const dispatch = useDispatch();
  const { languageInformation } = selector.application;
  const { data } = selector.stacks;
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [slideValue, setSlideValue] = React.useState(0);
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  React.useEffect(() => {
    dispatch(StackActions.getStackPageDataRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

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
            {data && (
              <Carousel
                beforeChange={e => setSlideValue(e)}
                className="carousel"
                responsive={responsive}
              >
                {data?.stacks.map((e, i) => {
                  return <StackTextBox key={`StackTextBox${i}`} {...e} />;
                })}
              </Carousel>
            )}
          </StacksContent>
          <h1 className="myProjects">Projetos que participei</h1>
          <BioContent>
            {data?.projects &&
              data?.projects.map((e, i) => (
                <ProjectComponent
                  {...e}
                  key={`ProjectComponents->${i}`}
                  aling={i % 2 === 0 ? 'rigth' : 'left'}
                />
              ))}
          </BioContent>
        </Content>
        <Footer />
        <DrawerButton onClick={handleOpenDrawer} />
      </Container>
    </>
  );
};

export default Stacks;

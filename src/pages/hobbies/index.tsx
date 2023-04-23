import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hobbiesAssets } from '../../assets/hobbies';
import { Creators as HobbiesActions } from '../../store/ducks/hobbies';
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

const Hobbies = (props: any) => {
  const { hobbies, application } = useSelector((state: IReduxState) => state);
  const { languageInformation, language } = application;
  const { data } = hobbies;
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  React.useEffect(() => {
    dispatch(HobbiesActions.getHobbiesPageDataRequest({ language }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, language]);

  return (
    <>
      <TemplateDrawer
        anchor="right"
        actualPage="Hobbies"
        openDrawer={openDrawer}
        onClose={handleCloseDrawer}
      />
      <Container>
        <title>Hobbies</title>
        <IntroPages
          gif={hobbiesAssets.hobbieGif}
          message={languageInformation.hobbies.header}
        />
        <Content>
          <PageTitle>Hobbies</PageTitle>
          {data?.hobbies &&
            data?.hobbies.map((e, i) => (
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

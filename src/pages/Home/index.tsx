import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homeAssets } from '../../assets/home';

import {
  Bio,
  DrawerButton,
  Footer,
  IntroPages,
  TemplateDrawer,
} from '../../components';
import { IReduxState } from '../../interface';
import { HowIHelpYou } from '../../pageComplements/home/components';
import { Container } from '../../pageComplements/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useRouter } from 'next/router';
import { Creators as HomeActions } from '../../store/ducks/home';

const HomeComponent = (props: any) => {
  const { data, languageInformation } = useSelector(
    (state: IReduxState) => state.home,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HomeActions.getHomePageDataRequest());
  }, [dispatch, props]);

  const router = useRouter();
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
          gif={homeAssets.homeGif}
          message={languageInformation.homePage.header[0]}
        />
        <HowIHelpYou />
        {data && (
          <>
            <Bio {...data.bio} />
            <div
              onClick={() => router.push('/stacks')}
              className="more-about-me"
            >
              {languageInformation.homePage.moreAboutMyCareer}{' '}
              <ArrowOutwardIcon id="icon" />
            </div>
            {data.bios.map((e, i) => (
              <Bio
                key={`Bio_Component_index-${i}`}
                {...e}
                aling={i % 2 === 0 ? 'rigth' : 'left'}
              />
            ))}
          </>
        )}

        <Footer />
      </Container>
      <DrawerButton onClick={handleOpenDrawer} />
    </>
  );
};

export default HomeComponent;

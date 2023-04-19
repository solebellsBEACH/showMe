import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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

const HomeComponent = () => {
  const statedfff = useSelector(
    (state: IReduxState) => state.home,
  );
  const { languageInformation } = statedfff

  console.log(statedfff)
  const router = useRouter()
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
        <Bio {...languageInformation.homePage.bio} />
        <div onClick={() => router.push('/stacks')} className='more-about-me'>{languageInformation.homePage.moreAboutMyCareer} <ArrowOutwardIcon id='icon' /></div>
        {languageInformation.homePage.bios.map((e, i) => (
          <Bio key={`Bio_Component_index-${i}`} {...e} aling={i % 2 === 0 ? 'rigth' : 'left'} />
        ))}
        <Footer />
      </Container>
      <DrawerButton onClick={handleOpenDrawer} />
    </>
  );
};

export default HomeComponent;

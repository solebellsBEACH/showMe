import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRouter } from 'next/router';

import { Bio, DrawerButton, Footer, TemplateDrawer } from '../../components';
import { IReduxState } from '../../interface';
import { Links } from '../../mocks/links';
import { HowIHelpYou } from '../../pageComplements/home/components';
import {
  Badge,
  BadgeList,
  CareerCTA,
  HeroActions,
  HeroAside,
  HeroContent,
  HeroDescription,
  HeroEyebrow,
  HeroSection,
  HeroTitle,
  PrimaryAction,
  ProfileCard,
  ProfileImage,
  QuickFactCard,
  QuickFactsGrid,
  SecondaryAction,
  SpotlightCard,
  SpotlightGrid,
} from '../../pageComplements/home/styles';
import { Container } from '../../pageComplements/styles';

const HomeComponent = () => {
  const { languageInformation } = useSelector(
    (state: IReduxState) => state.application,
  );
  const { hero, bio, bios, moreAboutMyCareer } = languageInformation.homePage;
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <TemplateDrawer
        anchor="right"
        actualPage="Home"
        openDrawer={openDrawer}
        onClose={() => setOpenDrawer(false)}
      />
      <Container>
        <title>{`${hero.name} | Senior Full Stack Engineer`}</title>
        <HeroSection>
          <HeroContent>
            <HeroEyebrow>{hero.eyebrow}</HeroEyebrow>
            <HeroTitle>
              {hero.name}
              <span>{hero.role}</span>
            </HeroTitle>
            <HeroDescription>{hero.description}</HeroDescription>
            <HeroActions>
              <PrimaryAction
                type="button"
                onClick={() => router.push('/stacks')}
              >
                {hero.ctaPrimary}
                <ArrowOutwardIcon />
              </PrimaryAction>
              <SecondaryAction
                href={Links().linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {hero.ctaSecondary}
                <LinkedInIcon />
              </SecondaryAction>
            </HeroActions>
            <BadgeList>
              {hero.badges.map(badge => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </BadgeList>
          </HeroContent>

          <HeroAside>
            <ProfileCard>
              <ProfileImage src={bio.image_url} alt={hero.name} />
              <QuickFactsGrid>
                {hero.quickFacts.map(fact => (
                  <QuickFactCard key={`${fact.label}-${fact.value}`}>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </QuickFactCard>
                ))}
              </QuickFactsGrid>
            </ProfileCard>
          </HeroAside>
        </HeroSection>

        <SpotlightGrid>
          {hero.spotlight.map(item => (
            <SpotlightCard key={`${item.label}-${item.value}`}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </SpotlightCard>
          ))}
        </SpotlightGrid>

        <HowIHelpYou />
        <Bio {...bio} />
        {bios.map((item, index) => (
          <Bio
            key={`Bio_Component_index-${index}`}
            {...item}
            aling={index % 2 === 0 ? 'rigth' : 'left'}
          />
        ))}
        <CareerCTA type="button" onClick={() => router.push('/stacks')}>
          {moreAboutMyCareer}
          <ArrowOutwardIcon />
        </CareerCTA>
        <Footer />
      </Container>
      <DrawerButton onClick={() => setOpenDrawer(true)} />
    </>
  );
};

export default HomeComponent;

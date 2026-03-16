import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

import {
  DrawerButton,
  Footer,
  IntroPages,
  TemplateDrawer,
} from '../../components';
import { stackAssets } from '../../assets/stacks';
import { IReduxState } from '../../interface';
import { Container, Content, BioContent } from '../../pageComplements/styles';
import {
  ExperienceCard,
  ExperienceGrid,
  OverviewCard,
  OverviewCards,
  OverviewSection,
  OverviewText,
  PageTitle,
  StacksContent,
} from '../../pageComplements/stacks/styles';
import {
  ProjectComponent,
  StackTextBox,
} from '../../pageComplements/stacks/components';
import { responsive } from '../../pageComplements/stacks/responsive';

const Stacks = () => {
  const { languageInformation } = useSelector(
    (state: IReduxState) => state.application,
  );
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <TemplateDrawer
        anchor="right"
        actualPage="Stacks"
        openDrawer={openDrawer}
        onClose={() => setOpenDrawer(false)}
      />
      <Container>
        <title>Stack & Career</title>
        <IntroPages
          gif={stackAssets.codeGif}
          message={languageInformation.stacks.header}
          eyebrow={languageInformation.homePage.hero.name}
        />
        <Content>
          <OverviewSection>
            <OverviewText>
              <p>{languageInformation.stacks.stackContextText}</p>
            </OverviewText>
            <OverviewCards>
              {languageInformation.stacks.overviewCards.map(item => (
                <OverviewCard key={`${item.label}-${item.value}`}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </OverviewCard>
              ))}
            </OverviewCards>
          </OverviewSection>

          <PageTitle>{languageInformation.stacks.experienceTitle}</PageTitle>
          <ExperienceGrid>
            {languageInformation.stacks.stackExperience.map(item => (
              <ExperienceCard key={`${item.title}-${item.time}`}>
                <span>{item.time}</span>
                <h3>{item.title}</h3>
                <p>{item.context}</p>
              </ExperienceCard>
            ))}
          </ExperienceGrid>

          <StacksContent>
            <div className="title">
              {languageInformation.stacks.stacksTitle}
            </div>
            <Carousel className="carousel" responsive={responsive}>
              {languageInformation.stacks.stacksDescription.map(
                (item, index) => (
                  <StackTextBox key={`StackTextBox${index}`} {...item} />
                ),
              )}
            </Carousel>
          </StacksContent>

          <h1 className="myProjects">
            {languageInformation.stacks.projectsTitle}
          </h1>
          <BioContent>
            {languageInformation.stacks.projects.map((project, index) => (
              <ProjectComponent
                {...project}
                key={`ProjectComponents->${index}`}
                aling={index % 2 === 0 ? 'rigth' : 'left'}
              />
            ))}
          </BioContent>
        </Content>
        <Footer />
      </Container>
      <DrawerButton onClick={() => setOpenDrawer(true)} />
    </>
  );
};

export default Stacks;

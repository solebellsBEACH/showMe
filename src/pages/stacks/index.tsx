import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  DrawerButton,
  Footer,
  Header,
  IntroPages,
  TemplateDrawer,
  TextBox,
} from "../../components";
import { IReduxState } from "../../interface";
import { Container, Content, PageTitle } from "../../pageComplements/styles";
import gif from "../../assets/stacks/codeGif.gif";
import { TimeLine } from "../../pageComplements/stacks/components";

const stacks = () => {
  const { languageInformation } = useSelector(
    (state: IReduxState) => state.application
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
              key={"TextBox" + i}
              {...e}
              align={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </Content>
        <Footer />
        <DrawerButton onClick={handleOpenDrawer} />
      </Container>
    </>
  );
};

export default stacks;

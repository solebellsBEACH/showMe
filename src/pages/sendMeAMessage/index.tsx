import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Footer, Header, TemplateDrawer } from '../../components';
import { IReduxState, ISendMeAMessageForm } from '../../interface';
import { ContentText } from '../../pageComplements/sendMeAMessage/components';
import { Container, Content, PageTitle } from '../../pageComplements/styles';

const SendMeAMessage = () => {
  const { languageInformation } = useSelector(
    (state: IReduxState) => state.application,
  );
  const [openDrawer, setOpenDrawer] = useState(false);
  const [form, setForm] = useState<ISendMeAMessageForm>({
    subject: '',
    description: '',
  });
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
        actualPage="Fale Comigo"
        openDrawer={openDrawer}
        onClose={handleCloseDrawer}
      />
      <Container>
        <Header
          name={languageInformation.sendMeAMessage.title}
          handleOpenDrawer={handleOpenDrawer}
        />
        <Content>
          <PageTitle>{languageInformation.sendMeAMessage.title}</PageTitle>
          <ContentText setForm={setForm} form={form} />
        </Content>
        <Footer />
      </Container>
    </>
  );
};

export default SendMeAMessage;

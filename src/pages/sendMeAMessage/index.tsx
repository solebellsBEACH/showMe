import { useState } from "react";
import { useSelector } from "react-redux";
import { Footer, Header, TemplateDrawer } from "../../components";
import { IReduxState } from "../../interface";
import { ContentText } from "../../pageComplements/sendMeAMessage/components";
import { Container, Content, PageTitle } from "../../pageComplements/styles";

const SendMeAMessage = () => {

    const { languageInformation } = useSelector((state: IReduxState) => state.application)
    const [openDrawer, setOpenDrawer] = useState(false)
    const handleOpenDrawer = () => {
        setOpenDrawer(true)
    }
    const handleCloseDrawer = () => {
        setOpenDrawer(false)
    }

    return <>
    <TemplateDrawer
                anchor='right'
                actualPage='Fale Comigo'
                openDrawer={openDrawer}
                onClose={handleCloseDrawer}
            />
            <Container>
                <Header 
                               name={languageInformation.sendMeAMessage.title}
                handleOpenDrawer={handleOpenDrawer} />
                <Content>
                    <PageTitle>{languageInformation.sendMeAMessage.title}</PageTitle>
                    <ContentText/>
                </Content>
                <Footer/>
            </Container>
    </>
}
 
export default SendMeAMessage;
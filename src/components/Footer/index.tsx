import { useSelector } from "react-redux";
import { IReduxState } from "../../interface";
import { Container, ContentLeft, ContentRight } from "./styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    const applicationData = useSelector((state: IReduxState) => state.application);

    return <Container>
        <ContentLeft>{applicationData.languageInformation.homePage.footer[0]}</ContentLeft>
        <ContentRight>
            <div>{applicationData.languageInformation.homePage.footer[1]}</div>
        <div
        className="icons-content"
        >
            <GitHubIcon className="icon"/>
            <InstagramIcon className="icon"/>
            <LinkedInIcon className="icon"/>
        </div>
        </ContentRight>
    </Container>
}
 
export default Footer;
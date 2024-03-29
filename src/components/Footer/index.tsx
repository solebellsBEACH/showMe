import { useSelector } from 'react-redux';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { IReduxState } from '../../interface';
import { Links } from '../../mocks/links';
import { Container, ContentLeft, ContentRight } from './styles';

const Footer = () => {
  const applicationData = useSelector(
    (state: IReduxState) => state.application,
  );

  return (
    <Container>
      <ContentLeft>
        {applicationData.languageInformation.homePage.footer[0]}
      </ContentLeft>
      <ContentRight>
        <div>{applicationData.languageInformation.homePage.footer[1]}</div>
        <div className="icons-content">
          <a href={Links().github}>
            <GitHubIcon className="icon" />
          </a>
          <a href={Links().instagram}>
            <InstagramIcon className="icon" />
          </a>
          <a href={Links().linkedin}>
            <LinkedInIcon className="icon" />
          </a>
        </div>
      </ContentRight>
    </Container>
  );
};

export default Footer;

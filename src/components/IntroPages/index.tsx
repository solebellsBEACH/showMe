import { BackgroundGif, Container, ContentTypewriter } from './styles';

interface IntroPageProps {
  gif: string;
  message: string;
}

const IntroPage = ({ gif, message }: IntroPageProps) => {
  return (
    <Container>
      <BackgroundGif alt="gif-header" src={gif} />
      <ContentTypewriter>{message}</ContentTypewriter>
    </Container>
  );
};

export default IntroPage;

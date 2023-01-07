import { BackgroundGif, Container, ContentTypewriter } from './styles';

import { StaticImageData } from 'next/image';
interface IntroPageProps {
  gif: StaticImageData;
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

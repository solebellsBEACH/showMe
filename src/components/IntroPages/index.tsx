import {
  BackgroundGif,
  Container,
  ContentDescription,
  ContentEyebrow,
  ContentTypewriter,
} from './styles';

interface IntroPageProps {
  gif: string;
  message: string;
  eyebrow?: string;
  description?: string;
}

const IntroPage = ({ gif, message, eyebrow, description }: IntroPageProps) => {
  return (
    <Container>
      <BackgroundGif alt="gif-header" src={gif} />
      <ContentTypewriter>
        {eyebrow && <ContentEyebrow>{eyebrow}</ContentEyebrow>}
        <h1>{message}</h1>
        {description && <ContentDescription>{description}</ContentDescription>}
      </ContentTypewriter>
    </Container>
  );
};

export default IntroPage;

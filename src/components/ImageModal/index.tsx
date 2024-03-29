import { Container, Content, ContentImage } from './styles';

interface IImageModal {
  open: boolean;
  onClose: () => void;
  image: string;
}

export const ImageModal = ({ onClose, open, image }: IImageModal) => {
  return (
    <Container onClose={onClose} open={open}>
      <Content>
        <ContentImage alt="ImageModal" src={image} />
      </Content>
    </Container>
  );
};

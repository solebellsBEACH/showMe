import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background: ${({ theme }) => theme.black};
`;
export const BackgroundGif = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100vh;
  filter: grayscale(90%);
`;
export const ContentTypewriter = styled.div`
  font-size: 4vw;
  font-weight: bold;
  position: absolute;
  color: ${({ theme }) => theme.templateColor5};
  padding: 1rem 1rem 1rem 2rem;
  margin: 0 5vw;
  background: ${({ theme }) => theme.white};

  @media (max-width: 768px) {
    font-size: 6vw;
  }
`;

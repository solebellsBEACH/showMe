import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin: 1.5rem 0;
  padding: 1.4rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(42, 42, 94, 0.08);
  box-shadow: 0 20px 48px rgba(42, 42, 94, 0.08);

  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

export const ContentImage = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  h1 {
    margin: 0 5%;
    margin-top: 20%;
    text-align: center;
    position: absolute;
    color: ${({ theme }) => theme.white};
    font-weight: 600;
    z-index: 2;
  }
`;

export const ImageContainer = styled.img<{ onHover: boolean }>`
  object-fit: cover;
  width: 25vw;
  min-width: 18rem;
  height: auto;
  background: ${({ theme }) => theme.gray2};
  border-radius: 1.5rem;
  filter: blur(${props => (props.onHover ? '10px' : '0px')});
  transition: filter 0.25s ease;

  @media (max-width: 1250px) {
    width: 100%;
    min-width: 0;
    height: 30rem;
  }

  @media (max-width: 768px) {
    height: 20rem;
  }
`;

export const Content = styled.div`
  height: auto;
  width: 100%;

  h1 {
    text-transform: uppercase;
    font-size: 1rem;
    margin: 0.3rem 0 1rem;
    color: ${({ theme }) => theme.templateColor3};
    letter-spacing: 0.08em;
  }

  h2 {
    font-size: 1rem;
    margin: 1rem 0;
    color: ${({ theme }) => theme.gray3};
    font-weight: 400;
    line-height: 1.7;
  }

  h3 {
    font-size: clamp(2rem, 5vw, 3.4rem);
    width: 80%;
    margin: 0 0 1rem;
    color: ${({ theme }) => theme.templateColor5};
    font-weight: 700;
    letter-spacing: -0.05em;

    @media (max-width: 1250px) {
      width: auto;
    }
  }
`;

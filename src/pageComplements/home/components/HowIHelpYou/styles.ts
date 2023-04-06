import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5vh 5vw;
`;

export const ContentTop = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
  }

  img {
    height: 30rem;

    @media (max-width: 768px) {
      height: 15rem;
      margin: 0rem -2rem 0rem -3rem;
    }

    @media (max-width: 600px) {
      height: 10rem;
    }

    @media (max-width: 500px) {
      height: 5rem;
      flex-direction: column;
    }
  }
  h1 {
    font-size: 5rem;
    color: ${({ theme }) => theme.templateColor4};
    @media (max-width: 768px) {
      font-size: 3rem;
    }
    @media (max-width: 600px) {
      font-size: 2rem;
    }
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;


export const ContentBottom = styled.div`
  margin-top: 5vh;
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  grid-template-columns: auto auto auto;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

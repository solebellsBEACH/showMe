import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 7vw 0;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem 0;
  }
`;

export const ContentTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }

  img {
    height: 6rem;
    width: 6rem;
    border-radius: 1.5rem;
    padding: 1rem;
    background: rgba(100, 100, 222, 0.12);
  }

  h1 {
    font-size: clamp(2.2rem, 5vw, 4rem);
    color: ${({ theme }) => theme.templateColor5};
    letter-spacing: -0.05em;
  }
`;

export const ContentBottom = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

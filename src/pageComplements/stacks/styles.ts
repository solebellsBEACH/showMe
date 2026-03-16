import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  padding: 4rem 7vw 0;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 0;
  }
`;

export const PageTitle = styled.h1`
  font-size: clamp(2.2rem, 4vw, 3.75rem);
  color: ${({ theme }) => theme.templateColor5};
  margin-bottom: 2rem;
  letter-spacing: -0.05em;
`;

export const OverviewSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.9fr);
  gap: 1rem;
  margin-bottom: 4rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const OverviewText = styled.div`
  padding: 1.5rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(42, 42, 94, 0.08);
  box-shadow: 0 20px 48px rgba(42, 42, 94, 0.08);

  p {
    font-size: clamp(1rem, 2vw, 1.15rem);
    color: ${({ theme }) => theme.gray3};
  }
`;

export const OverviewCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const OverviewCard = styled.div`
  padding: 1.1rem;
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.white};
  border: 1px solid rgba(42, 42, 94, 0.08);
  box-shadow: 0 16px 36px rgba(42, 42, 94, 0.06);

  span {
    display: block;
    margin-bottom: 0.45rem;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.templateColor3};
  }

  strong {
    display: block;
    font-size: 0.98rem;
    line-height: 1.4;
    color: ${({ theme }) => theme.templateColor5};
  }
`;

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 4rem;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ExperienceCard = styled.div`
  padding: 1.3rem;
  border-radius: 1.6rem;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(42, 42, 94, 0.08);
  box-shadow: 0 18px 40px rgba(42, 42, 94, 0.07);

  span {
    display: inline-flex;
    margin-bottom: 1rem;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    background: rgba(77, 77, 171, 0.12);
    color: ${({ theme }) => theme.templateColor3};
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h3 {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.templateColor5};
    margin-bottom: 0.7rem;
  }

  p {
    font-size: 0.96rem;
    color: ${({ theme }) => theme.gray3};
  }
`;

export const StacksContent = styled.section`
  margin-bottom: 5rem;

  .title {
    font-size: clamp(2.2rem, 4vw, 3.5rem);
    font-weight: 700;
    color: ${({ theme }) => theme.templateColor5};
    margin-bottom: 1.5rem;
    letter-spacing: -0.05em;
  }

  .carousel {
    padding-bottom: 1rem;
  }
`;

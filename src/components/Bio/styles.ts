import styled from 'styled-components';

export const Container = styled.section<{ aling: 'left' | 'rigth' }>`
  width: auto;
  min-height: 30rem;
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.1fr);
  grid-template-areas: ${props =>
    props.aling === 'left' ? "'image content'" : "'content image'"};
  gap: 2rem;
  align-items: center;
  padding: 2rem;
  margin: 0 7vw 2rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(42, 42, 94, 0.08);
  box-shadow: 0 28px 80px rgba(42, 42, 94, 0.08);
  backdrop-filter: blur(12px);

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'image'
      'content';
    margin: 0 1.5rem 1.5rem;
    padding: 1.4rem;
  }
`;

export const Content = styled.div`
  grid-area: content;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .eyebrow {
    display: inline-flex;
    align-self: flex-start;
    padding: 0.45rem 0.8rem;
    border-radius: 999px;
    background: rgba(77, 77, 171, 0.12);
    color: ${({ theme }) => theme.templateColor3};
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h1 {
    font-size: clamp(2rem, 4vw, 3.35rem);
    color: ${({ theme }) => theme.templateColor5};
    letter-spacing: -0.05em;
  }

  p {
    font-size: clamp(1rem, 1.8vw, 1.14rem);
    color: ${({ theme }) => theme.gray3};
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .tags span {
    padding: 0.55rem 0.85rem;
    border-radius: 999px;
    background: ${({ theme }) => theme.gray1};
    color: ${({ theme }) => theme.templateColor5};
    font-size: 0.88rem;
    font-weight: 600;
  }
`;

export const PerfilContainer = styled.img`
  grid-area: image;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 1.6rem;
  object-fit: cover;
  background: ${({ theme }) => theme.gray1};
  box-shadow: 0 18px 46px rgba(42, 42, 94, 0.12);

  @media (max-width: 1200px) {
    aspect-ratio: 16 / 10;
  }
`;

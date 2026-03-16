import styled from 'styled-components';

export const Container = styled.article<{ aling: 'left' | 'rigth' }>`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr);
  grid-template-areas: ${props =>
    props.aling === 'left' ? "'image content'" : "'content image'"};
  gap: 2rem;
  align-items: center;
  padding: 1.5rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(42, 42, 94, 0.08);
  box-shadow: 0 24px 64px rgba(42, 42, 94, 0.08);

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'image'
      'content';
  }
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .meta span,
  .result {
    display: inline-flex;
    align-self: flex-start;
    padding: 0.45rem 0.75rem;
    border-radius: 999px;
    background: rgba(77, 77, 171, 0.12);
    color: ${({ theme }) => theme.templateColor3};
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .result {
    background: rgba(42, 42, 94, 0.08);
    color: ${({ theme }) => theme.templateColor5};
  }

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    color: ${({ theme }) => theme.templateColor5};
    letter-spacing: -0.05em;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.gray3};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    list-style: none;
  }

  li {
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
  aspect-ratio: 16 / 10;
  border-radius: 1.5rem;
  object-fit: cover;
  background: ${({ theme }) => theme.gray1};
`;

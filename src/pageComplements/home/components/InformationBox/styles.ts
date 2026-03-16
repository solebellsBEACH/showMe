import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  min-height: 18rem;
  padding: 1.5rem;
  border: 1px solid rgba(42, 42, 94, 0.08);
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.8);
  color: ${({ theme }) => theme.gray4};
  text-align: left;
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    background-color 0.25s ease, color 0.25s ease;
  box-shadow: 0 20px 48px rgba(42, 42, 94, 0.08);

  section {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  h2 {
    font-size: 1.45rem;
    font-weight: 700;
    line-height: 1.15;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.gray3};
  }

  .icon {
    width: 4.5rem;
    height: 4.5rem;
    margin-bottom: 1.5rem;
    border-radius: 1.35rem;
    display: grid;
    place-items: center;
    background: rgba(77, 77, 171, 0.12);
    color: ${({ theme }) => theme.templateColor3};
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 28px 72px rgba(42, 42, 94, 0.14);
    background: ${({ theme }) => theme.templateColor5};
    color: ${({ theme }) => theme.white};

    p {
      color: rgba(255, 255, 255, 0.82);
    }

    .icon {
      background: rgba(255, 255, 255, 0.12);
      color: ${({ theme }) => theme.white};
    }
  }

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

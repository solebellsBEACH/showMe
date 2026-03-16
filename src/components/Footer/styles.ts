import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding: 3rem 7vw;
  background: radial-gradient(
      circle at top right,
      rgba(100, 100, 222, 0.22),
      transparent 30%
    ),
    ${({ theme }) => theme.templateColor5};
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.white};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 1.5rem;
  }
`;

export const ContentLeft = styled.div`
  max-width: 26rem;
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.05em;
`;

export const ContentRight = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 1rem;
  max-width: 28rem;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.82);

  @media (max-width: 768px) {
    align-items: flex-start;
  }

  .icons-content {
    display: flex;
    gap: 0.9rem;
  }

  .icons-content a {
    width: 3.25rem;
    height: 3.25rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    color: ${({ theme }) => theme.white};
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.14);
    transition: transform 0.25s ease, background-color 0.25s ease;
  }

  .icons-content a:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.16);
  }

  .icon {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

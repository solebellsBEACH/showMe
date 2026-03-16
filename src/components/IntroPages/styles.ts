import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.section`
  min-height: 72vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 7rem 7vw 4rem;
  background: ${({ theme }) => theme.templateColor5};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(42, 42, 94, 0.18),
        rgba(42, 42, 94, 0.82)
      ),
      radial-gradient(
        circle at top right,
        rgba(100, 100, 222, 0.38),
        transparent 34%
      );
    z-index: 1;
  }

  @media (max-width: 768px) {
    min-height: 64vh;
    padding: 6rem 1.5rem 2.5rem;
  }
`;

export const BackgroundGif = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.1) brightness(0.55);
`;

export const ContentTypewriter = styled.div`
  position: relative;
  z-index: 2;
  max-width: 52rem;
  padding: 2rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(16px);
  box-shadow: 0 32px 80px rgba(42, 42, 94, 0.2);
  animation: ${fadeUp} 0.75s ease both;

  h1 {
    font-size: clamp(2.6rem, 6vw, 5rem);
    color: ${({ theme }) => theme.templateColor5};
    letter-spacing: -0.05em;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ContentEyebrow = styled.span`
  display: inline-flex;
  margin-bottom: 1rem;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(77, 77, 171, 0.12);
  color: ${({ theme }) => theme.templateColor3};
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const ContentDescription = styled.p`
  max-width: 40rem;
  margin-top: 1rem;
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: ${({ theme }) => theme.gray3};
`;

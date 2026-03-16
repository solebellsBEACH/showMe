import styled, { css, keyframes } from 'styled-components';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const actionStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.95rem 1.35rem;
  border-radius: 999px;
  font-size: 0.98rem;
  font-weight: 600;
  transition: transform 0.25s ease, background-color 0.25s ease,
    color 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const HeroSection = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 420px);
  gap: 2rem;
  padding: 8rem 7vw 2.5rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 2rem 7vw auto auto;
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    background: rgba(100, 100, 222, 0.18);
    filter: blur(10px);
  }

  &::after {
    content: '';
    position: absolute;
    inset: auto auto 1rem 0;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    background: rgba(171, 171, 227, 0.16);
    filter: blur(20px);
  }

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    padding: 6.5rem 1.5rem 2rem;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${fadeUp} 0.8s ease both;
`;

export const HeroEyebrow = styled.span`
  display: inline-flex;
  align-self: flex-start;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  background: rgba(77, 77, 171, 0.12);
  color: ${({ theme }) => theme.templateColor3};
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const HeroTitle = styled.h1`
  max-width: 46rem;
  font-size: clamp(3.4rem, 10vw, 6.5rem);
  color: ${({ theme }) => theme.templateColor5};
  letter-spacing: -0.07em;

  span {
    display: block;
    margin-top: 1rem;
    max-width: 42rem;
    font-size: clamp(1.15rem, 2.5vw, 1.6rem);
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    line-height: 1.45;
    letter-spacing: 0;
    color: ${({ theme }) => theme.gray3};
  }
`;

export const HeroDescription = styled.p`
  max-width: 44rem;
  font-size: clamp(1.02rem, 2.1vw, 1.22rem);
  color: ${({ theme }) => theme.gray3};
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
`;

export const PrimaryAction = styled.button`
  ${actionStyles};
  border: 1px solid transparent;
  background: ${({ theme }) => theme.templateColor5};
  color: ${({ theme }) => theme.white};
`;

export const SecondaryAction = styled.a`
  ${actionStyles};
  border: 1px solid rgba(42, 42, 94, 0.12);
  background: rgba(255, 255, 255, 0.78);
  color: ${({ theme }) => theme.templateColor5};
`;

export const BadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const Badge = styled.span`
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(42, 42, 94, 0.08);
  color: ${({ theme }) => theme.templateColor5};
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 14px 28px rgba(42, 42, 94, 0.05);
`;

export const HeroAside = styled.aside`
  position: relative;
  z-index: 1;
  animation: ${fadeUp} 0.95s ease both;
`;

export const ProfileCard = styled.div`
  padding: 1.1rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(42, 42, 94, 0.08);
  box-shadow: 0 32px 80px rgba(42, 42, 94, 0.12);
  backdrop-filter: blur(18px);
`;

export const ProfileImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 1.5rem;
  object-fit: cover;
  object-position: center;
`;

export const QuickFactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const QuickFactCard = styled.div`
  padding: 0.9rem;
  border-radius: 1.3rem;
  background: ${({ theme }) => theme.white};
  border: 1px solid rgba(42, 42, 94, 0.06);

  span {
    display: block;
    margin-bottom: 0.35rem;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.templateColor3};
  }

  strong {
    display: block;
    font-size: 0.94rem;
    line-height: 1.45;
    color: ${({ theme }) => theme.templateColor5};
  }
`;

export const SpotlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  padding: 0 7vw 2rem;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0 1.5rem 2rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const SpotlightCard = styled.div`
  padding: 1.15rem 1.25rem;
  border-radius: 1.6rem;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(42, 42, 94, 0.08);
  box-shadow: 0 16px 36px rgba(42, 42, 94, 0.06);

  span {
    display: block;
    margin-bottom: 0.55rem;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.templateColor3};
  }

  strong {
    display: block;
    font-size: 1.1rem;
    line-height: 1.35;
    color: ${({ theme }) => theme.templateColor5};
  }
`;

export const CareerCTA = styled.button`
  ${actionStyles};
  margin: 0 7vw;
  border: 1px solid rgba(42, 42, 94, 0.12);
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.templateColor5};

  @media (max-width: 1080px) {
    margin: 0 1.5rem;
  }
`;

import styled from 'styled-components';

import { ITheme } from '../interface';

export const Container = styled.div`
  background: ${({ theme }: { theme: ITheme }) => theme.background};
  min-height: 40rem;
  width: auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
        circle at 10% 10%,
        rgba(171, 171, 227, 0.5),
        transparent 22%
      ),
      radial-gradient(
        circle at 90% 15%,
        rgba(100, 100, 222, 0.1),
        transparent 18%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.4), transparent 18%);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 320px) {
    .react-multiple-carousel__arrow--right {
      min-width: 30px;
      min-height: 30px;
      margin-right: -12px;
    }
  }
`;

export const Content = styled.div`
  padding: 4rem 7vw 0;

  .myProjects {
    margin-top: 5rem;
    width: 100%;
    font-size: clamp(2.8rem, 6vw, 4.25rem);
    font-weight: 500;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.templateColor5};
  }
`;

export const ContentText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4vh 0 0 8vw;
  height: auto;
  width: 90vw;
  font-weight: 400;
  font-size: 2vw;

  p {
    width: 45vw;
  }

  img {
    margin-left: 5vw;
    width: 25vw;
    height: 25vw;
  }

  @media (max-width: 764px) {
    flex-direction: column-reverse;
    margin-bottom: 5vh;

    p {
      width: 85%;
    }

    img {
      margin-left: -5vw;
      width: 70vw;
      height: 70vw;
    }
  }

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  color: ${({ theme }) => theme.templateColor5};
  margin-bottom: 5vh;
`;

export const BioContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

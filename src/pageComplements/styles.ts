import styled from 'styled-components';

import { ITheme } from '../interface';

export const Container = styled.div`
  background: ${({ theme }: { theme: ITheme }) => theme.background};
  min-height: 40rem;
  width: auto;
  @media (max-width: 320px) {
    .react-multiple-carousel__arrow--right {
      min-width: 30px;
      min-height: 30px;
      margin-right: -12px;
    }
  }
`;
export const Content = styled.div`
  margin-top: 10vh;
  .myProjects {
    margin-top: 5rem;
    margin-left: 10vw;
    width: 80vw;
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 3.5rem;
    }
    @media (max-width: 425px) {
      font-size: 2.5rem;
    }
    @media (max-width: 375px) {
      font-size: 2rem;
    }
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
  filter: contrast(1.2);
  color: ${({ theme }) => theme.templateColor5};
  margin-bottom: 5vh;
`;

export const BioContent = styled.div`
  padding: 0 5vw;
`;

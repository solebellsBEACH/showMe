import styled from 'styled-components';

import { ITheme } from '../interface';

export const Container = styled.div`
  background: ${({ theme }: { theme: ITheme }) => theme.background};
  min-height: 40rem;
  width: auto;
`;
export const Content = styled.div`
  margin: 10vh 0vw;

`;

export const ContentText = styled.div`
  margin: 4vh 0 0 8vw;
  height: auto;
  width: 90vw;
font-weight:400;
  font-size: 2vw;
  @media(max-width: 1024px){
    font-size:1.5rem;
  }

  @media(max-width: 425px){
    font-size:1.2rem;
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

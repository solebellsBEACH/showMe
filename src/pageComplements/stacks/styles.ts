import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div`
  margin: 4vh 4vw;
  min-height: 40rem;
  width: auto;
`;
export const PageTitle = styled.h1`
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  filter: contrast(1.2);
  color: ${({ theme }) => theme.templateColor5};
  margin-bottom: 2vh;
`;


export const StacksContent = styled.div`
width: auto;
.title{
    font-family: SF Pro Display,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 2.2rem;
    font-weight: 600;
    margin-left:2vw;
    @media(max-width:590px){
    margin-left:4vw;
    font-size: 1.8rem;
  }
    color: ${({ theme }) => theme.gray4};
  }

`
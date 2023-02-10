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
width: 100vw;
margin-left:-4vw;
.title{

    font-size: 3rem;
    font-weight: 600;
    margin-left:10vw;
    @media(max-width:590px){
    margin-left:4vw;
    font-size: 2rem;
  }
    color: ${({ theme }) => theme.templateColor5};
  }

.carousel{
  padding-left:10vw;

  @media(max-width:590px){
    padding-left:0;
  }
}
`
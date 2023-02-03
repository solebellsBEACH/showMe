import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 30rem;
  background: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5vh 5vw;
`

export const InformationBox = styled.div`
width: auto;
margin: 1rem 0;
transition : box-shadow ease-in-out .45s;
padding: 2rem;
h2{
  font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
    margin-bottom: 12px;
}
p{
  font-weight: 300;
}
&:hover{
  box-shadow: 0px 0px 40px rgb(0 0 0 / 16%);
}

@media(max-width:768px){
  width: 80vw;
  box-shadow: 0px 0px 40px rgb(0 0 0 / 10%);
} 
`

export const ContentBottom = styled.div`
margin-top: 5vh;
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  grid-template-columns: auto auto auto;

  @media(max-width:768px){
    grid-template-columns: auto;
} 

`
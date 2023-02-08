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

export const ContentTop = styled.div`
  display: flex;
  align-items:center;
  flex-direction:row;

  img{
    height: 30rem;
    margin:-7rem -2rem ;

    @media(max-width:768px){
      height: 15rem;
    margin:0rem -2rem 0rem -3rem;
    }

    @media(max-width:600px){
      height: 10rem;
    margin:0rem -5rem 0rem -6rem;
    }

    @media(max-width:500px){
      height: 5rem;
    margin:0rem -5rem 0rem -6rem;
}
  }
  h1{
      font-size: 5rem;
      color: ${({ theme }) => theme.templateColor4};
      @media(max-width:768px){
        font-size: 3rem;
    }
    @media(max-width:600px){
        font-size: 2rem;
    }
    @media(max-width:500px){
      font-size: 1.5rem;
}
  }

  `

export const InformationBox = styled.div`
width: auto;
margin: 1rem 0;
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
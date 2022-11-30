import styled from 'styled-components'

export const Container = styled.div`

`
export const Content = styled.div`
margin:4vh 4vw;
min-height:40rem ;
width:auto ;
`
export const PageTitle = styled.h1`
    font-size:2rem;
  @media (max-width: 768px){
        font-size:1.5rem;
}
filter:contrast(1.2);
    color:${({ theme }) => theme.templateColor5};
    margin-bottom:2vh;
`

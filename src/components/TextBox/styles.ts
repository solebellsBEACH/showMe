import styled from 'styled-components'

export const Container = styled.div`
width:100% ;
/* min-height: 5rem; */
display:flex;
flex-direction:row;
@media (max-width:1250px){
    flex-direction:column;
}
margin:2vh 0;
`
export const ImageBox = styled.div`;
width:60vw;
/* min-height: 10vw; */
background:blue;
margin-right:1vw;
@media (max-width:1250px){
    width:92vw;
    height: 20vw;
    }
    @media (max-width:768px){

    height: 30vw;
    }

    border-radius:0.5vw;
`

export const Content = styled.div`
height:auto ;
width:100vw;
margin-right: 1vw;
h1{
    font-size:30px;
    margin:2vh 0;
    color:${({ theme }) => theme.templateColor5};
    @media (max-width:768px){
font-size:22px
    }
}
h2{
    font-size:20px;
    margin:2vh 0;
    color:${({ theme }) => theme.templateColor5};
    font-weight:400;
    @media (max-width:768px){
font-size:16px
    }
}

@media (max-width:1250px){
    width:92vw;
}
`
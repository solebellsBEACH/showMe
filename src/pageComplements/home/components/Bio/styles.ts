import Image from 'next/image';
import styled from 'styled-components'

export const Container = styled.div`
width:100% ;
min-height:30rem ;
background:${({ theme }) => theme.white};
display:flex;
flex-direction:row;
padding:5vh 5vw;

@media (max-width: 1200px){
    flex-direction:column;
}

`;

export const Content = styled.div`
    width:100% ;
    min-height:30rem ;
    background:red;

`;

export const PerfilContainer = styled(Image)`
width:25vw ;
height:40vw ;
border-radius:0.2vw;
object-fit: cover;
filter: grayscale(100%);
margin-right: 1vw;

@media (max-width: 1200px){
    margin-right: none;
    margin-bottom: 1vh;

    width:100% ;
    height:40vw ;
}
`
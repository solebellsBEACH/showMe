import Image from 'next/image'
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
export const ImageContainer = styled(Image)`
    object-fit: cover;
    width:25vw;
    height:auto ;
    /* min-height: 10vw; */
    background:blue;
    margin-right:1vw;
    @media (max-width:1250px){
        width:92vw;
        height: 30rem;
        }
    @media (max-width:768px){
        height: 20rem;
    }
    border-radius:0.2vw;
`

export const Content = styled.div`
height:auto ;
width:100vw;
margin-right: 1vw;
h1{
    text-transform: uppercase;
    font-size:25px;
    margin:2vh 0;
    color:${({ theme }) => theme.templateColor3};
    @media (max-width:768px){
font-size:18px
    }
}

h2{
    font-size:18px;
    margin:2vh 0;
    color:${({ theme }) => theme.templateColor5};
    font-weight:400;
    @media (max-width:1250px){
        font-size:17px;

        }
    @media (max-width:768px){
font-size:16px;

    }
}

h3{
    font-size:55px;
    width: 70%;
    margin:2vh 0;
    color:${({ theme }) => theme.templateColor5};
    font-weight:900;
    @media (max-width:1250px){
        font-size:45px;
        width: auto;
        }
    @media (max-width:768px){
font-size:35px;

    }
}

@media (max-width:1250px){
    width:92vw;
}
`
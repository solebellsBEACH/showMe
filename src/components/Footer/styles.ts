import styled from "styled-components";

export const Container = styled.div`
width:100% ;
padding: 1rem 10vw;
background:${({ theme }) => theme.templateColor5};
margin-top:5rem;
display:flex;
justify-content: space-between;
align-items: center;

@media(max-width: 768px) {
    flex-direction:column;
}

`

export const ContentLeft = styled.div`
width:auto;
height: auto;
color:white;
font-weight:bold;
font-size: 2rem;
@media(max-width: 768px) {
    font-size: 0.9rem;
}
`;
export const ContentRight = styled.div`
@media(max-width: 768px) {
    margin-top: 3vh;
}  
display:flex;
justify-content: center;
align-items: center;
flex-direction:column;
width:auto;
height: auto;
font-size: 1.2rem;
color:white;
@media(max-width: 768px) {
    font-size: 0.8rem;
}
a{
    color:white;
}
.icons-content{
    margin-top: 2vh;
    .icon{
        margin:0 2vw;
        height: 50px;
        width: 50px;

        @media(max-width: 768px) {
            height: 30px;
        width: 30px;
}
    }
    
}
`;
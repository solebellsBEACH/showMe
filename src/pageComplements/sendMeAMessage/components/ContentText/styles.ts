import styled from 'styled-components'
 
export const Container  = styled.div`
min-height: 20rem;
width: 100%;
display:flex;
flex-direction: column;


.assunto{
    width: 90%;
    margin-bottom: 3vh;
}
.conteudo{
    width: 95%;
}
.button{
    margin-top: 3vh;
    height: 8vh;
    width: 95%;
    background-color: ${({theme})=>theme.templateColor5};
}
`
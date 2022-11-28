import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
display:flex ;
align-items:center;
justify-content:center;
flex-direction:column;
height:70vh ;
background:${({ theme }) => theme.black};
@media(min-width:1040px){
    height:100vh ;
}
`
export const BackgroundGif = styled(Image)`
width:100%;
object-fit: cover;
height:70vh ;
filter: grayscale(90%);

@media(min-width:1040px){
    height:100vh ;
}

`

interface ContentTypewriterProps {
    readonly showGif: boolean
}

export const ContentTypewriter = styled.div<ContentTypewriterProps>`
font-size:6vw;
font-weight:bold ;
position:absolute;
color:${({ theme, showGif }) => showGif ? theme.templateColor5 : theme.white};
padding: 1rem 1rem 1rem 2rem;
background:${({ theme, showGif }) => showGif ? theme.white : 'none'};

`
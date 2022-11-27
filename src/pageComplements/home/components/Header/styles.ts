import Image from 'next/image'
import styled from 'styled-components'
import { theme } from '../../../../styles/theme'


export const Container = styled.div`
display:flex ;
align-items:center;
justify-content:center;
flex-direction:column;
height:40rem ;
background:${({ theme }) => theme.black};
`
export const BackgroundGif = styled(Image)`
width:100%;
object-fit: cover;
height:40rem ;

filter: grayscale(90%);

`

interface ContentTypewriterProps {
    readonly showGif: boolean
}

export const ContentTypewriter = styled.div<ContentTypewriterProps>`
font-size:100px;
font-weight:bold ;
position:absolute;
color:${({ theme, showGif }) => showGif ? theme.templateColor5 : theme.white};
padding: 1rem 1rem 1rem 2rem;
background:${({ theme, showGif }) => showGif ? theme.white : 'none'};

`
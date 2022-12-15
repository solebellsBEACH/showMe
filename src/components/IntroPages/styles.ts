import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
display:flex ;
align-items:center;
justify-content:center;
flex-direction:column;
height:40vh ;
background:${({ theme }) => theme.black};
`
export const BackgroundGif = styled(Image)`
width:100%;
object-fit: cover;
height:100vh ;
filter: grayscale(90%);
`
import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
filter: grayscale(50%);
`
export const BackgroundGif = styled(Image)`
width:100%;
object-fit: cover;
height:40rem ;

`
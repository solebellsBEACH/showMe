import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div``

export const SwitchContainer = styled.div`
margin-left:1rem;
`

export const BrasilIcon = styled(Image)`
object-fit: cover;
width:2rem;
height:1.5rem;
filter: grayscale(100%);
&.selected{
    filter: grayscale(0%);
}

`
export const USAIcon = styled(Image)`
width:2rem;
height:1.5rem;
object-fit: cover;
filter: grayscale(100%);
&.selected{
    filter: grayscale(0%);
}
`
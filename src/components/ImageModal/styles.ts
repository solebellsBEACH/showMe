import styled from 'styled-components'
import {Modal} from '@mui/material'
import Image from 'next/image'

export const Container = styled(Modal)`
display: flex;
justify-content: center;
align-items: center;
`
export const Content = styled.div`
`
export const ContentImage = styled(Image)`
width: 60vw;
height:auto;
@media(max-width:900px){
    width: 90vw;
}
`
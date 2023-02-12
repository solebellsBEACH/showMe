import React, { useState } from 'react'
import { Container, ContentImage, ContentInfo, Description, MyXPContent, ReduceContent } from './styles';

export interface IStackTextBox {
    title: string;
    image: string;
    description: string;
    myXP: string;
}

export const StackTextBox: React.FC<IStackTextBox> = ({ myXP, description, image, title }) => {
    const [seeMore, setSeeMore] = useState(false)
    const [seeMoreXP, setSeeMoreXP] = useState(false)
    const descriptionFormation = !seeMore ? description.slice(0, 100) + ' ...' : description
    const myXPFormation = !seeMoreXP ? myXP.slice(0, 50) + ' ...' : myXP
    return (
        <Container>
            <ContentInfo>
                <h3>{title}</h3>
                <Description seeMore={seeMore}>{descriptionFormation}</Description>
                <ReduceContent onClick={() => setSeeMore(!seeMore)}>{!seeMore ? 'Ver mais' : 'Ver menos'}</ReduceContent>
                <MyXPContent seeMore={seeMoreXP}>{myXPFormation}</MyXPContent>
                <ReduceContent onClick={() => setSeeMoreXP(!seeMoreXP)}>{!seeMoreXP ? 'Ver mais' : 'Ver menos'}</ReduceContent>
            </ContentInfo>
            <ContentImage>
                <img src={image} alt='icon' />
            </ContentImage>
        </Container>
    )
}

import React, { useState } from 'react'
import { BackgroundGif, Container, ContentTypewriter } from './styles'
import gif from '../../../../assets/homeHeaderGif.gif'
import Typewriter from "typewriter-effect";

export const Header = (props: any) => {

    const [showGif, setShowGif] = useState(false)
    const information = ["Hi Geek", "Welcomes You"]

    return (
        <Container>
            {showGif &&
                <BackgroundGif
                    src={gif}
                    onLoa
                />
            }
            <ContentTypewriter
                showGif={showGif}
            >
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(information[0])
                            .pauseFor(150)
                            .deleteAll()
                            .typeString(information[1])
                            .callFunction(() => {
                                setShowGif(true)
                              })
                            .start();
                    }}
                />
            </ContentTypewriter>
        </Container>
    )
}
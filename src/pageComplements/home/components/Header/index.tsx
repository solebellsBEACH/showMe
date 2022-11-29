import React, { useState } from 'react'
import { BackgroundGif, Container, ContentTypewriter } from './styles'
import gif from '../../../../assets/homeHeaderGif.gif'
import Typewriter from "typewriter-effect";

export interface IHeaderProps {
    showGif: boolean;
    setShowGif: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({ setShowGif, showGif }: IHeaderProps) => {


    const information = ["Hi Geek", "Welcomes You"]

    return (
        <Container>
            {showGif &&
                <BackgroundGif
                    alt='gif-header'
                    src={gif}
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
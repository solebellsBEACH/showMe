import React from 'react'
import { BackgroundGif, Container, ContentTypewriter } from './styles'
import gif from '../../../../assets/homeHeaderGif.gif'
import Typewriter from "typewriter-effect";
import { IReduxState } from '../../../../interface';
import { useSelector } from 'react-redux'
export interface IHeaderProps {
    showGif: boolean;
    setShowGif: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({ setShowGif, showGif }: IHeaderProps) => {
    const {languageInformation} = useSelector((state: IReduxState) => state.application);
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
                {!showGif?<Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(languageInformation.homePage.header[0])
                            .pauseFor(150)
                            .deleteAll()
                            .typeString(languageInformation.homePage.header[1])
                            .callFunction(() => {
                                setShowGif(true)
                            })
                            .start();
                    }}
                />:<>{languageInformation.homePage.header[1]}</>}
            </ContentTypewriter>
        </Container>
    )
}
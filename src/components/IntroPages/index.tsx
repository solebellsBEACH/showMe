import { BackgroundGif, Container, ContentTypewriter } from "./styles";

import Typewriter from "typewriter-effect";
import { useSelector } from "react-redux";
import { IReduxState } from "../../interface";
import { StaticImageData } from "next/image";
interface IntroPageProps {
    gif: StaticImageData
    message:string
}
 
const IntroPage = ({gif, message}:IntroPageProps) => {
    const {languageInformation} = useSelector((state: IReduxState) => state.application);
    return <Container>
        <BackgroundGif
                    alt = 'gif-header'
                    src = {gif}
                />
 <ContentTypewriter>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(message)
                            .start();
                    }}
                />
                </ContentTypewriter>
   
    </Container>;
}
 
export default IntroPage;
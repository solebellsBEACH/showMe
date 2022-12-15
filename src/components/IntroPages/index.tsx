import { BackgroundGif, Container, ContentTypewriter } from "./styles";
import gif from '../../assets/hobbies/surfGif.gif'
import Typewriter from "typewriter-effect";
import { useSelector } from "react-redux";
import { IReduxState } from "../../interface";
interface IntroPageProps {
}
 
const IntroPage = ({}:IntroPageProps) => {
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
                            .typeString(languageInformation.hobbies.header)
                            .start();
                    }}
                />
                </ContentTypewriter>
   
    </Container>;
}
 
export default IntroPage;
import { Container } from "./styles";
import TextField from '@mui/material/TextField';
import { useSelector } from "react-redux";
import { IReduxState } from "../../../../interface";
import Button from '@mui/material/Button';


const ContentText = () => {

    const { languageInformation } = useSelector((state: IReduxState) => state.application)

    return <Container>
        <TextField className="assunto" label={languageInformation.sendMeAMessage.subject} variant="outlined" />
        <TextField 
            className="conteudo"
            variant="outlined"
            multiline
            label={languageInformation.sendMeAMessage.description}
            minRows={10}
        />
        <Button
        className="button"
         variant="contained"
        >
{languageInformation.sendMeAMessage.send}
</Button>
    </Container>
}
 
export default ContentText;
import { Container } from './styles';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import { IReduxState, ISendMeAMessageForm } from '../../../../interface';
import Button from '@mui/material/Button';
import { Dispatch, SetStateAction } from 'react';
interface IContentTextProps {
  form: ISendMeAMessageForm;
  setForm: Dispatch<SetStateAction<ISendMeAMessageForm>>;
}

const ContentText = ({ form, setForm }: IContentTextProps) => {
  const { languageInformation } = useSelector(
    (state: IReduxState) => state.application,
  );

  return (
    <Container>
      <TextField
        onChange={e => {
          setForm({ ...form, subject: e.target.value });
        }}
        className="assunto"
        label={languageInformation.sendMeAMessage.subject}
        variant="outlined"
      />
      <TextField
        onChange={e => {
          setForm({ ...form, description: e.target.value });
        }}
        className="conteudo"
        variant="outlined"
        multiline
        label={languageInformation.sendMeAMessage.description}
        minRows={10}
      />
      <Button
        onClick={() => {
          console.log(form);
        }}
        className="button"
        variant="contained"
      >
        {languageInformation.sendMeAMessage.send}
      </Button>
    </Container>
  );
};

export default ContentText;

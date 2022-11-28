import * as S from './Contacts.styles'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import ButtonGreen from '../../../../components/ButtonGreen/ButtonGreen';

const Contacts = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <S.ContactsContainer>
            <S.Container>
                <div>
                    <h1>Contatos</h1>
                    <S.P><AccessTimeIcon/> Seg-Sex 08:00 ás 18:00</S.P>
                    <S.P><LocationOnIcon/> Recife, PE</S.P>
                    <S.P><LocalPhoneIcon/> (81) 9 9999-9999</S.P>
                    <S.P><EmailIcon/> contato@saudeparatodos.com.br</S.P>
                </div>
                <div>
                    <h1>Envie uma mensagem</h1>
                    <S.Form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Nome"
                            variant="outlined"
                            type="text"
                            margin="normal"
                            fullWidth
                            {...register("name", { required: 'Digite Seu Nome', minLength: { value: 3, message: 'Nome muito curto' } })}
                            error={errors.name}
                            helperText={errors.name?.message}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            type="email"
                            margin="normal"
                            fullWidth
                            {...register("email", { required: 'Digite Seu Email',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Email inválido"
                                }
                            })}
                            error={errors.email}
                            helperText={errors.email?.message}
                        />

                        <TextField
                            label="Mensagem"
                            variant="outlined"
                            margin="normal"
                            type="multiline"
                            fullWidth
                            multiline
                            rows={4}
                            {...register("text", { required: 'Digite Sua Mensagem', minLength: { value: 10, message: 'Mensagem muito curta' } })}
                            error={errors.text}
                            helperText={errors.text?.message}
                        />

                        <ButtonGreen type="submit">Enviar</ButtonGreen>

                    </S.Form>

                </div>
            </S.Container>
        </S.ContactsContainer>
    )
}

export default Contacts 
import * as S from './SignUpForm.styles'
import { useForm } from 'react-hook-form'
import { TextField } from '@mui/material'
import { type } from '@testing-library/user-event/dist/type'

const SignUpForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    return (
        <div>
            <S.Title>CRIAR CONTA</S.Title>

            <S.Form onSubmit={handleSubmit((data) => console.log(data))}>
                <S.InputContainer>
                <TextField
                    label="Nome"
                    variant="outlined"
                    {...register("name", { required: 'Digite seu Nome', minLength: { value: 3, message: "Mínimo de 3 caracteres" } })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />

                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    {...register("email", {
                        required: 'Digite Seu Email',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Digite um email válido"
                        }
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                {/* DEVE SER MAIOR DE 18 ANOS */}
                <TextField
                    label="Data de Nascimento"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    type="date"
                    {...register("birthDate", { required: 'Digite sua data de nascimento' })}
                    error={!!errors.birthDate}
                    helperText={errors.birthDate?.message}
                />

                <TextField
                    label="CPF"
                    variant="outlined"
                    inputProps={{
                        pattern: "[0-9]*", title: "Digite apenas números", type: "number",
                    }}
                    {...register("cpf", {
                        required: 'Digite seu CPF',
                        minLength: { value: 11, message: "Mínimo de 11 caracteres" },
                        maxLength: { value: 11, message: "Máximo de 11 caracteres" },
                        pattern: {
                            value: /^[0-9]*$/i,
                            message: "Digite um CPF válido"
                        }
                    })}
                    error={!!errors.cpf}
                    helperText={errors.cpf?.message}
                />

                <TextField
                    label="Cartão SUS"
                    variant="outlined"
                    inputProps={{
                        pattern: "[0-9]*", title: "Digite apenas números", type: "number",
                    }}
                    {...register("sus", {
                        required: 'Digite seu Cartão SUS',
                        minLength: { value: 15, message: "Mínimo de 15 caracteres" },
                        maxLength: { value: 15, message: "Máximo de 15 caracteres" },
                        pattern: {
                            value: /^[0-9]*$/i,
                            message: "Digite um Cartão SUS válido"
                        }
                    })}
                    error={!!errors.sus}
                    helperText={errors.sus?.message}
                />

                <TextField
                    label="CEP"
                    variant="outlined"
                    inputProps={{
                        pattern: "[0-9]*", title: "Digite apenas números", type: "number",
                    }}
                    {...register("cep", {
                        required: 'Digite seu CEP',
                        minLength: { value: 8, message: "Mínimo de 8 caracteres" },
                        maxLength: { value: 8, message: "Máximo de 8 caracteres" },
                        pattern: {
                            value: /^[0-9]*$/i,
                            message: "Digite um CEP válido"
                        }
                    })}
                    error={!!errors.cep}
                    helperText={errors.cep?.message}
                />

                <TextField
                    label="Rua"
                    variant="outlined"
                    {...register("street", { required: 'Digite sua Rua' })}
                    error={!!errors.street}
                    helperText={errors.street?.message}
                />

                <TextField
                    label="Número"
                    variant="outlined"
                    inputProps={{
                        pattern: "[0-9]*", title: "Digite apenas números", type: "number",
                    }}
                    {...register("number", {
                        required: 'Digite seu Número',
                        minLength: { value: 1, message: "Mínimo de 1 caracter" },
                        maxLength: { value: 5, message: "Máximo de 5 caracteres" },
                        pattern: {
                            value: /^[0-9]*$/i,
                            message: "Digite um Número válido"
                        }
                    })}
                    error={!!errors.number}
                    helperText={errors.number?.message}
                />

                <TextField
                    label="complemento"
                    variant="outlined"
                    {...register("complement")}
                    error={!!errors.complement}
                    helperText={errors.complement?.message}
                />


                <TextField
                    label="Bairro"
                    variant="outlined"
                    {...register("neighborhood", { required: 'Digite seu Bairro' })}
                    error={!!errors.neighborhood}
                    helperText={errors.neighborhood?.message}
                />

                <TextField
                    label="Cidade"
                    variant="outlined"
                    {...register("city", { required: 'Digite sua Cidade' })}
                    error={!!errors.city}
                    helperText={errors.city?.message}
                />

                <TextField
                    label="Estado"  
                    variant="outlined"
                    {...register("state", { required: 'Digite seu Estado' })}
                    error={!!errors.state}
                    helperText={errors.state?.message}
                />

                <TextField
                    label="Senha"
                    variant="outlined"
                    type="password"
                    {...register("password", {
                        required: 'Digite sua Senha',
                        minLength: { value: 6, message: "Mínimo de 6 caracteres" },
                        maxLength: { value: 12, message: "Máximo de 12 caracteres" },
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />

                <TextField
                    label="Confirme sua Senha"
                    variant="outlined"
                    type="password"
                    {...register("passwordConfirm", {
                        required: 'Confirme sua Senha',
                        minLength: { value: 6, message: "Mínimo de 6 caracteres" },
                        maxLength: { value: 12, message: "Máximo de 12 caracteres" },
                        validate: value => watch('password') === value || 'As senhas não coincidem'
                    })}
                    error={!!errors.passwordConfirm}
                    helperText={errors.passwordConfirm?.message}
                />

                </S.InputContainer>

                <S.SubmitButton type="submit" variant="contained" color="primary">
                    CRIAR
                </S.SubmitButton>

            </S.Form>

        </div>
    )
}

export default SignUpForm
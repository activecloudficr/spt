import React from "react";
import { useForm } from "react-hook-form";
import Logo from "../../../../assets/imgs/Logo.png";
import { TextField } from "@mui/material";
import * as S from "./SignIn.styles";
import { useNavigate } from "react-router-dom";
import { goToSignUp, backPage } from "../../routes/Coordinator";

const SignIn = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <S.SignInContainer className="sign-in">
            <S.Container>
                <S.BackButton onClick={() => backPage(navigate)}>
                    <S.ArrowBack />
                    <p>Voltar</p>
                </S.BackButton>

                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.ImgLogo src={Logo} alt="Logo" />
                    <S.P>JÁ POSSUO UMA CONTA</S.P>

                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        margin="normal"
                        fullWidth
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


                    <TextField
                        label="Senha"
                        variant="outlined"
                        type="password"
                        margin="normal"
                        fullWidth
                        {...register("password", {
                            required: 'Digite Sua Senha', 
                            minLength: { value: 6, message: 'Senha muito curta' }
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />

                    <S.LoginsButton type="submit">Entrar</S.LoginsButton>

                    <S.P>Ainda não possui uma conta?</S.P>

                    <S.SignUpButton onClick={() => goToSignUp(navigate)}>Criar Conta</S.SignUpButton>

                </S.Form>

            </S.Container>
        </S.SignInContainer>
    );
};

export default SignIn;
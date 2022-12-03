import React, { useState } from 'react';
import * as S from './Header.styles';
import Logo from '../../../../assets/imgs/Logo.png';
import ButtonGreen from '../../../../components/ButtonGreen/ButtonGreen';
import { useNavigate } from 'react-router-dom';
import { goToSignUp, goToSignIn } from "../../../Panel/routes/Coordinator";

const Header = () => {
    const [selected, setSelected] = useState('home');
    const navigate = useNavigate();

    // const funcTest = () => {
    //     navigate

    return (
        <S.HeaderContainer>
            <S.Container>
                <S.ImgLogo src={Logo} alt="Logo" />

                <S.Menu>
                    <S.MenuList>
                        <S.MenuItem selected={selected === "home"}>Home</S.MenuItem>
                        <S.MenuItem selected={selected === "servicos"}>Serviços</S.MenuItem>
                        <S.MenuItem selected={selected === "contato"}>Contato</S.MenuItem>
                    </S.MenuList>
                </S.Menu>

                <S.LoginsButtons>
                    <S.SignInButton onClick={() => goToSignIn(navigate)}>Entrar</S.SignInButton>
                    <ButtonGreen onClick={() => goToSignUp(navigate)}>Cadastrar</ButtonGreen>
                </S.LoginsButtons>
            </S.Container>
        </S.HeaderContainer>
    )
}

export default Header
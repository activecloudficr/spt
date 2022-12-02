import { useNavigate } from "react-router-dom";
import { backPage, goToSignIn, goToHome } from "../../../../routes/Coordinator";
import * as S from "./Header.styles";
import Logo from "../../../../../../assets/imgs/Logo.png";


const Header = () => {
    const navigate = useNavigate();

    return (
        <S.HeaderContainer className="header">
            <S.Container>
                <S.BackButton onClick={() => backPage(navigate)}>
                    <S.ArrowBack />
                    <p>Voltar</p>
                </S.BackButton>
                <S.ImgLogo src={Logo} alt="Logo" onClick={() => goToHome(navigate)} />
                <S.LoginButton onClick={() => goToSignIn(navigate)}>Entrar</S.LoginButton>
            </S.Container>
        </S.HeaderContainer>
    )
}

export default Header
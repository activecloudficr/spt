import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { theme } from "../../../../../../assets/styles/Theme";

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.white};
    padding: 10px 20px;
    text-transform: uppercase;
    -webkit-box-shadow: 0px 2px 11px 0px rgb(0 0 0 / 48%);;
    -moz-box-shadow: 0px 2px 11px 0px rgb(0 0 0 / 48%);;
    box-shadow: 0px 2px 11px 0px rgb(0 0 0 / 48%);;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    max-width: 1280px;
`

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    background: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
`

export const ArrowBack = styled(ArrowBackIcon)`
    cursor: pointer;
`

export const ImgLogo = styled.img`
    width: 180px;
    height: 59px;
    cursor: pointer;
`

export const LoginButton = styled.button`
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.black};
    padding: 10px 30px;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${theme.colors.yellowHover};
    }
`
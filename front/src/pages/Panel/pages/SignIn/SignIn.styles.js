import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { theme } from "../../../../assets/styles/Theme";


export const SignInContainer = styled.div`
    background: linear-gradient(290deg, rgba(5, 193, 148, 0.81) 0%, rgba(5, 193, 148, 0.25) 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
`

export const Form = styled.form`
    background: ${theme.colors.white};
    border-radius: 20px;
    box-shadow: 0px 0px 20px 9px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    width: 400px;
`

export const ImgLogo = styled.img`
    width: 250px;
    margin-bottom: 20px;
`

export const P = styled.p`
    font-size: 16px;
    font-weight: 600;
    /* margin-bottom: 30px; */
`

export const BackButton = styled.button`
    display: flex;
    align-items: center;
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

export const LoginsButton = styled.button`
    background: ${theme.colors.green};
    border: none;
    border-radius: 10px;
    color: ${theme.colors.white};
    font-size: 16px;
    font-weight: 600;
    padding: 12px 35px;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.3s;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 20px;
    &:hover {
        background: ${theme.colors.greenHover};
    }
`

export const SignUpButton = styled(LoginsButton)`
    background: ${theme.colors.yellow};
    color: ${theme.colors.black};
    letter-spacing: normal;
    margin-bottom: 0;
    &:hover {
        background: ${theme.colors.yellowHover};
    }
`
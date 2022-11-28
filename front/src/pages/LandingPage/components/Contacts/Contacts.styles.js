import styled from "styled-components";
import { theme } from "../../../../assets/styles/Theme";

export const ContactsContainer = styled.div`
    background: linear-gradient(180deg, rgba(5, 193, 148, 0.25) 0%, rgba(5, 193, 148, 0.81) 100%);
    display:  flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    min-height: 600px;
    padding: 95px 20px 20px 20px;
`

export const Container = styled.div`
    background: ${theme.colors.white};
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 100%;
    height: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
`
export const P = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
    font-size: 18px;
    color: ${theme.colors.dark};
`
export const Form = styled.form`
    display: flex;
`
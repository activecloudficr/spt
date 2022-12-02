import styled from "styled-components";
import { theme } from "../../assets/styles/Theme";


export const Button = styled.button`
    margin: 0 auto;
    border: none;
    background: ${theme.colors.green};
    color: ${theme.colors.white};
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 10px;

    &:hover {
        background: ${theme.colors.greenHover};
    }
`
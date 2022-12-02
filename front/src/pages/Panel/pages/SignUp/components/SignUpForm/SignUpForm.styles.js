import styled from "styled-components";
import { theme } from "../../../../../../assets/styles/Theme";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 1280px;
    padding: 0 20px;
`

export const InputContainer = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 15px;
    width: 100%;
`;

export const SubmitButton = styled.button`
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    border: none;
    border-radius: 5px;
    padding: 10px 0;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    width: 200px;
    margin: 0 auto 20px auto;
    &:hover {
        background-color: ${theme.colors.greenHover};
    }
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin: 20px 0;
`
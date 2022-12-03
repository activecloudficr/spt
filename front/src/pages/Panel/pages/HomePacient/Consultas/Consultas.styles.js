import styled from "styled-components";
import { theme } from "../../../../../assets/styles/Theme";
import AddIcon from '@mui/icons-material/Add';


export const Container = styled.div`
    display: flex;
    gap: 50px;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 20px;
    width: 250px;
`

export const TitleBoxItem = styled.h1`
    font-size: 14px;
    color: ${theme.colors.gray};
`
export const DateBox = styled.div`
    margin: 10px 0;
`
export const StatusBox = styled.div`
    margin: 10px 0;
`
export const ButtonLink = styled.button`
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 15px;
    text-transform: uppercase;
    font-weight: bold;

`
export const ButtonLinkCancel = styled.button`
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
    border: none;
    border-radius: 10px;
    padding: 5px;
    font-size: 10px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
`

export const ParagraphStatus = styled.p`
    color: ${props => props.status === 'AGENDADO' ?  "#0083FC" : theme.colors.green};
    font-size: 14px;
    font-weight: bold;
`

export const BoxSeeMore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 20px;
    width: 250px;
    height: 285px;
    cursor: pointer;
`

export const BoxMore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.gray};
    margin-bottom: 10px;
`

export const IconMore = styled(AddIcon)`
    color: ${theme.colors.white};
    font-size: 80px !important;
`
export const TitleBoxSeeMore = styled.h1`
    font-size: 25px;
`
import styled from "styled-components";
import { theme } from "../../../../assets/styles/Theme";

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
    position: fixed;
    z-index: 10;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    max-width: 1280px;
`

export const ImgLogo = styled.img`
    width: 180px;
    height: 59px;
    cursor: pointer;
`

export const Menu = styled.nav``

export const MenuList = styled.ul`
    display: flex;
    gap: 20px;
`
export const MenuItem = styled.li`
    border-bottom: 3px solid ${props => props.selected ? theme.colors.green : 'transparent'};
    font-weight: 600;
    cursor: pointer;
`

export const LoginsButtons = styled.div`
    display: flex;
    gap: 20px;
`
export const SignInButton = styled.button`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: 5px;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: 600;
`
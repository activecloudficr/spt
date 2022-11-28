import styled from "styled-components";
import { theme } from "../../../../assets/styles/Theme";

export const ServicesBoxContainer = styled.section`
    padding-top: 95px;
    height: 100vh;
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    max-width: 1280px;
`

export const H1 = styled.h1`
    margin-bottom: 10px;
`

export const P = styled.p``

export const ContainerBox = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    gap: 40px;
    margin-top: 30px;
`

export const Box = styled.div`
    width: 100%;
    height: 185px;

    background: ${theme.colors.white};
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`

export const ContainerDetails = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    margin-top: 10px;
    gap: 50px;
    justify-items: end;
`

export const H2 = styled.h2`
    display: flex;
    align-items: center;
    font-size: 40px;
    text-transform: uppercase;
`
export const Img = styled.img`
    width: 245px;
    height: 214px;
    display: flex;
`
import styled from "styled-components";
import { theme } from "../../../../assets/styles/Theme";

export const SiteInfosContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 95px;
    height: 100vh;
    min-height: 600px;
    background: linear-gradient(180deg, rgba(5, 193, 148, 0.81) 0%, rgba(5, 193, 148, 0.25) 100%);
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 20px;
    max-width: 1280px;
    padding: 0 20px;
`

export const BoxOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const P = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: ${theme.colors.white};
    margin-bottom: 10px;
`

export const H1 = styled.h1`
    font-size: 40px;
    font-weight: 600;
    color: ${theme.colors.white};
    margin-bottom: 40px;
`

export const ContainerInfos = styled.div`
    display: flex;
    gap: 30px;
`

export const BoxInfos = styled.div`
    width: 218px;
    height: 245px;
    overflow: hidden;

    background: ${theme.colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`
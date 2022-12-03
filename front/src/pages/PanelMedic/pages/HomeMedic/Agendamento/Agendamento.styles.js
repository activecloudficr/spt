import RadioGroup from '@mui/material/RadioGroup';
import styled from 'styled-components';
import { theme } from "../../../../../assets/styles/Theme";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ButtonGreen from '../../../../../components/ButtonGreen/ButtonGreen';

export const RadioGroupStylized = styled(RadioGroup)`
    display: flex !important;
    flex-direction: row !important;
`
export const MedicsContainerDad = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
`

export const MedicsContainer = styled.div`
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 15px;
`

export const ContainerMedic = styled.div`
    display: flex;
    gap: 20px;
`

export const TitleMedic = styled.h1`
    font-size: 18px;
    color: ${theme.colors.gray};
    padding-top: 10px;
`

export const TextMedic = styled.p`
    font-size: 16px;
    color: ${theme.colors.green};
    font-weight: bold;
`

export const LocalizationProviderStylized = styled(LocalizationProvider)`
    width: 120px !important;
    margin-top: 50px !important;
`
export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled(ButtonGreen)`
    margin: 0 auto !important;
`
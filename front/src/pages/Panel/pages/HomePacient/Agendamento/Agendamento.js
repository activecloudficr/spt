import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import * as S from './Agendamento.styles';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';

const Agendamento = () => {
    const [value, setValue] = useState('remote');
    const [options, setOptions] = useState("");
    const [date, setDate] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    };

    const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
            return <PickersDay {...pickersDayProps} />;
    }

    const medicList = [
        {
            name: 'Dr. João',
            especialidades: ['Cardiologia'],
        },
        {
            name: 'Dr. Pedro',
            especialidades: ['Pediatria'],
        },
        {
            name: 'Dr. Lucas',
            especialidades: ['Oftalmologia'],
        },
    ]

    const MedicsBox = (props) => {
        return (
            <S.MedicsContainer key={props.index}>
                <S.ContainerMedic>
                    <S.TitleMedic>Medico: {props.name}</S.TitleMedic>
                    <FormControlLabel
                        onChange={(event) => setOptions(event.target.value)}
                        value={props.index} control={<Radio />}
                    />
                </S.ContainerMedic>

                <S.TitleMedic>Especialidade(s):</S.TitleMedic>
                {props.especialidades.map((especialidade) => {
                    return (
                        <S.TextMedic>{especialidade}</S.TextMedic>
                    )
                })}
            </S.MedicsContainer>
        )
    }

    return (
        <div>
            <h1>Agendamento</h1>

            <div>
                <FormControl onChange={handleChange}>
                    <S.RadioGroupStylized
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="remote"
                        name="radio-buttons-group"

                    >
                        <FormControlLabel value="remote" control={<Radio />} label="Remoto" />
                        {/* <FormControlLabel value="presential" control={<Radio />} label="Presencial" /> */}
                    </S.RadioGroupStylized>
                </FormControl>

            </div>
            <h1>Medicos</h1>
            {value === 'remote' &&
                <S.MedicsContainerDad>
                    {medicList.map((medic, index) => {
                        return (
                            <MedicsBox name={medic.name} especialidades={medic.especialidades} index={index} />
                        )
                    })}
                </S.MedicsContainerDad>
            }
            <h1>Data</h1>

            <div>
                <S.LocalizationProviderStylized dateAdapter={AdapterDayjs}  style={{ margin: '10px' }}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        label="Week picker"
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderDay={renderWeekPickerDay}
                        renderInput={(params) => <TextField {...params} />}
                        inputFormat="'Week of' MMM d"
                    />
                </S.LocalizationProviderStylized>
            </div>
            <S.ButtonBox>
                <S.Button>Agendar</S.Button>
            </S.ButtonBox>
        </div>
    )
}

export default Agendamento
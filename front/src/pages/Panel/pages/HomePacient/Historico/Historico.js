import * as S from './Historico.styles';
import Modal from '../../../components/Modal/Modal';
import { useState } from 'react';
const Historico = () => {

    const [open, setOpen] = useState(false);

    const consutsList = [
        {
            id: 1,
            title: "Atendimento Clínico",
            date: "10/11/2022",
            time: "10:00",
            doctor: "Dr. João",
            status: "FINALIZADO",
        },
        {
            id: 2,
            title: "Consulta 2",
            date: "09/10/2022",
            time: "10:00",
            doctor: "Dr. João",
            status: "CANCELADO"
        },
    ]

    const ConsultasBox = (props) => {
        return (
            <S.Box className="consultas-box">
                <S.TitleBoxItem>{props.title}</S.TitleBoxItem>
                <p>Medico: {props.doctor}</p>

                <S.DateBox className="Date">
                    <S.TitleBoxItem>DATA</S.TitleBoxItem>
                    <p>{props.date}</p>
                </S.DateBox>

                <S.StatusBox className="Status">
                    <S.TitleBoxItem>STATUS</S.TitleBoxItem>
                    <S.ParagraphStatus status={props.status}>{props.status}</S.ParagraphStatus>
                </S.StatusBox>

                <S.ButtonLink onClick={() => setOpen(!open)} disabled={props.status === 'CANCELADO' ? true : false} >Diagnóstico</S.ButtonLink>
            </S.Box>
        )
    }


    return (
        <div>
            <h1>Histórico</h1>
            <S.Container className="consultas">
                {consutsList.map((item) => {
                    return (
                        <ConsultasBox
                            title={item.title}
                            doctor={item.doctor}
                            date={item.date}
                            status={item.status}
                        />
                    )
                }
                )}
                <S.BoxSeeMore>
                    <S.BoxMore>
                        <S.IconMore />
                    </S.BoxMore>
                    <S.TitleBoxSeeMore>Ver Mais >></S.TitleBoxSeeMore>
                </S.BoxSeeMore>
            </S.Container>
            <Modal open={open} setOpen={setOpen} />
        </div>
    );
};

export default Historico;
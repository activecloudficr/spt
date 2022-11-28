import * as S from './Consultas.styles';

const Consultas = () => {

    const consutsList = [
        {
            id: 1,
            title: "Consulta 1",
            date: "10/12/2022",
            time: "10:00",
            doctor: "Dr. João",
            status: "AGENDADO"
        },
        {
            id: 2,
            title: "Consulta 2",
            date: "20/12/2022",
            time: "10:00",
            doctor: "Dr. João",
            status: "AGENDADO"
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
                    <S.ParagraphStatus>{props.status}</S.ParagraphStatus>
                </S.StatusBox>

                <S.ButtonLink>Link da Consulta</S.ButtonLink>
                <S.ButtonLinkCancel>Cancelar</S.ButtonLinkCancel>
            </S.Box>
        )
    }


    return (
        <div>
            <h1>Consultas</h1>
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
        </div>
    );
};

export default Consultas;
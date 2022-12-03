import * as S from './Consultas.styles';
import Table from './Table';


const Consultas = () => {
    const consutsList = [
        {
            id: 1,
            quantity: 2,
            title: "AGENDAMENTOS",
            color: "#0083FC",
        },
        {
            id: 2,
            quantity: 2,
            title: "FINALIZADOS",
            color: "#00C2A0",
        },
        {
            id: 3,
            quantity: 0,
            title: "CANCELADOS",
            color: "#FF0000",
        },
    ]

    const ConsultasBox = (props) => {
        return (
            <S.Box className="consultas-box">
                <S.TitleBoxItem>{props.quantity}</S.TitleBoxItem>
                <S.TextInfo color={props.color}>{props.title}</S.TextInfo>
            </S.Box>
        )
    }


    return (
        <div>
            <S.Container className="consultas">
                {consutsList.map((item) => {
                    return (
                        <ConsultasBox
                            key={item.id}
                            quantity={item.quantity}
                            title={item.title}
                            color={item.color}
                        />
                    )
                }
                )}
            </S.Container>
           <Table />
        </div>
    );
};

export default Consultas;
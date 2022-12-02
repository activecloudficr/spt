import * as S from './ServicesBox.styles'
import Medics from '../../../../assets/imgs/Medics.png'
const ServicesBox = () => {

    const list = Array(5).fill('')

    const BoxItens = list.map((item, index) => {
        return (
            <S.Box key={index}>
            </S.Box>
        )
    })


    return (
        <S.ServicesBoxContainer>
            <S.Container>
                <S.H1>Agendamentos fáceis e rápidos.</S.H1>
                <S.P>Voltado para todos os públicos.</S.P>

                <S.ContainerBox>
                    {BoxItens}
                </S.ContainerBox>

                <S.ContainerDetails>
                    <S.H2>Tudo que você precisa em um só lugar!</S.H2>
                    <S.Img src={Medics} alt="Medics" />
                </S.ContainerDetails>

            </S.Container>

        </S.ServicesBoxContainer>
    )
}

export default ServicesBox
import * as S from './ServicesBox.styles'
import Medics from '../../../../assets/imgs/Medics.png'
import image1 from '../../../../assets/imgs/img-1.png';
import image2 from '../../../../assets/imgs/img-2.png';
import image3 from '../../../../assets/imgs/img-3.png';
import image4 from '../../../../assets/imgs/img-4.png';
import image5 from '../../../../assets/imgs/img-5.png';


const ServicesBox = () => {

    const list = [
        {
            id: 1,
            content: <img src={image1} alt="img1" style={{ width: '250px', height: '250px' }} />,
        },
        {
            id: 2,
            content: <img src={image2} alt="img1" style={{ width: '250px', height: '250px' }} />,
        },
        {
            id: 3,
            content: <img src={image3} alt="img1" style={{ width: '250px', height: '250px' }} />,
        },
        {
            id: 4,
            content: <img src={image4} alt="img1" style={{ width: '250px', height: '250px' }} />,
        },
        {
            id: 5,
            content: <img src={image5} alt="img1" style={{ width: '218px', height: '245px' }} />,
        },
    ]

    const BoxItens = list.map((item, index) => {
        return (
            <S.Box key={index}>
                {item.content}
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
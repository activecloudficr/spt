import CentralImg from '../../../../assets/imgs/CentralImg.png';
import * as S from './SiteInfos.styles';
import img1 from '../../../../assets/imgs/img1.webp';
import img2 from '../../../../assets/imgs/img2.jpg';

const SiteInfos = () => {
    return (
        <S.SiteInfosContainer>
            <S.Container>
                <S.BoxOne>
                    <S.P>Consultas online e presenciais.</S.P>
                    <S.H1>Na SAÚDE PARA TODOS você encontra o que precisa.</S.H1>

                    <S.ContainerInfos>
                        <S.BoxInfos>
                            <img src={img1} alt="img1" style={{ width: '218px', height: '245px' }} />
                        </S.BoxInfos>

                        <S.BoxInfos>
                            <img src={img2} alt="img1" style={{ width: '218px', height: '245px' }} />
                        </S.BoxInfos>

                    </S.ContainerInfos>

                </S.BoxOne>
                <img src={CentralImg} alt="CentralImg" />
            </S.Container>
        </S.SiteInfosContainer>
    )
}

export default SiteInfos
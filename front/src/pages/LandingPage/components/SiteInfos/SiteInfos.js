import CentralImg from '../../../../assets/imgs/CentralImg.png';
import * as S from './SiteInfos.styles';

const SiteInfos = () => {
    return (
        <S.SiteInfosContainer>
            <S.Container>
                <S.BoxOne>
                    <S.P>Consultas online e presenciais.</S.P>
                    <S.H1>Na SAÚDE PARA TODOS você encontra o que precisa.</S.H1>

                    <S.ContainerInfos>
                        <S.BoxInfos>
                        </S.BoxInfos>

                        <S.BoxInfos>
                        </S.BoxInfos>

                    </S.ContainerInfos>

                </S.BoxOne>
                <img src={CentralImg} alt="CentralImg" />
            </S.Container>
        </S.SiteInfosContainer>
    )
}

export default SiteInfos
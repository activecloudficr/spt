import * as S from './ButtonGreen.styles'

const ButtonGreen = ({ children, ...props }) => {
    return (
        <S.Button {...props}>
            {children}
        </S.Button>
    )
}

export default ButtonGreen
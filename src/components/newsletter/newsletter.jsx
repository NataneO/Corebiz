import * as S from './styled'

export function Newsletter() {
    return (
        <S.Newsletter>
            <h3>Participe de nossas news com promoções e novidades!</h3>
            <S.Form>
                <S.Input type="text" />
                <S.Input type="email" />
                <S.Button>Eu quero!</S.Button>
            </S.Form>
        </S.Newsletter>
    )
}
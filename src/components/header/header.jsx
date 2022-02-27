import * as S from './styled'



export function Header() {
    return (
        <>
            <S.Header>
                <S.HeaderSection>
                <S.LogoHeader></S.LogoHeader>
                <form>
                    <S.Input type="search" />
                </form>
                <S.Div className="profile">
                    Meu perfil
                </S.Div>
                <S.Div className="cart">
                    Carrinho
                </S.Div>
                </S.HeaderSection>
            </S.Header>

        </>
    )
}
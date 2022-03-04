import * as S from '../styled'

export default function HeaderPrincipal() {
    return (
        <S.Principal>
            <S.LogoHeader></S.LogoHeader>
            <form>
                <S.Input type="search" placeholder="O que está procurando?" />
            </form>
        </S.Principal>
    )
}
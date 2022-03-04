import * as S from './styled'

import HeaderPrincipal from './components/principal';
import MenuItems from './components/menuItems';
import CartItem from './components/cartItem';

export function Header() {

    return (
        <>
            <S.Header>
                <S.HeaderSection>
                    <HeaderPrincipal />
                    <MenuItems />
                    <CartItem />
                </S.HeaderSection>
            </S.Header>

        </>
    )
}
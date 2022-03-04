import * as S from '../styled'
import React, { useContext } from "react";
import Context from '../../../contexts/Context'
export default function CartItem() {
    const [cart, setCart] = useContext(Context);
    return (
        <Context.Consumer>
            {(cart) => (<S.NavItem cart><a><S.CartIcon /></a> <S.CounterItem>{cart}</S.CounterItem></S.NavItem>)}
        </Context.Consumer>
    )
}
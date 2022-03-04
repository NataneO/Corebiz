import * as S from './styled'
import React, {useContext} from "react";
import Context from '../../contexts/Context'

export function Header() {
    const [cart, setCart] = useContext(Context);
    return (
        <>
            <S.Header>
                <S.HeaderSection>
                    <S.LogoHeader></S.LogoHeader>
                    <form>
                        <S.Input type="search" placeholder="O que está procurando?" />
                    </form>
                    <S.Nav>
                        <S.NavItens>
                            <li>
                            <a> <S.PersonIcon/><S.Label>Meu perfil</S.Label></a>
                            </li>
                            <li>
                       
                            <a><S.CartIcon/></a>
                
                            <Context.Consumer>
                                {(cart) => (<S.CounterItem>{cart}</S.CounterItem>)}
                            </Context.Consumer>
                 
                            </li>
                        </S.NavItens>
                    </S.Nav>
                </S.HeaderSection>
            </S.Header>

        </>
    )
}
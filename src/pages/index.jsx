import React, { useState } from 'react';
import * as S from './styled';
import Context from '../contexts/Context'
import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'
import { Newsletter } from '../components/newsletter/newsletter'
import { Container } from './dashboard/dashContainer'


function Index() {
  const [cart, setCart] = useState(() => {
    const cartQtd = window.localStorage.getItem("cartQtd");
    const initialValue = parseInt(cartQtd);
    return initialValue || 0;
  });
 
  return (
    <Context.Provider value={[cart, setCart]}>
    <S.Index>
     <Header />
     <Container />
     <Newsletter />
     <Footer />
    </S.Index>
    </Context.Provider>
  )
}

export default Index

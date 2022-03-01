import * as S from './styled';
import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'
import { Newsletter } from '../components/newsletter/newsletter'
import { Container } from './dashboard/dashContainer'


function Index() {
 
  return (
    <S.Index>
     <Header />
     <Container />
     <Newsletter />
     <Footer />
    </S.Index>
  )
}

export default Index

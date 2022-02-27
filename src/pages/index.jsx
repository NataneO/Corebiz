import { useState } from 'react'
import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'
import { Newsletter } from '../components/newsletter/newsletter'
import { Container } from './dashboard/dashContainer'


function Index() {
 
  return (
    <div className="Index">
     <Header />
     <Container />
     <Newsletter />
     <Footer />
    </div>
  )
}

export default Index

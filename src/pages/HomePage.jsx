import React from 'react'
import img from '../assets/vector.svg'
import plant from '../assets/home.png'
import Container from '../components/Container/Container'
import Row from '../components/Container/Row'
import Navbar from '../components/Nav/Navbar'
import AssinarNewsletter from '../components/AssinarNewsletter/AssinarNewsletter'
export default function HomePage() {
  return (
    <main>
      <img src={img} className="vector" />
      <Navbar />
      <Container>
        <Row>
          <div className="col">
            <div className="txt">
              <div className="txt--regular">Sua casa com as</div>
              <div className="txt--large">melhores</div>
              <div className="txt--large">plantas</div>
              <div className="txt--regular" style={{margin: "25px 0"}}>
                Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
              </div>
            </div>
            <AssinarNewsletter />
          </div>
          <div className="col">
            <img className='home__img' src={plant} alt="planta" />
          </div>
        </Row>
      </Container>
    </main>

  )
}

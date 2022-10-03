import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../compoents/Footer'
import Header from '../compoents/Header'
import WhiteListItem from '../compoents/whitelistItem'

const WhiteList = () => {
  return (
   
    <>
    <header>
        <Header/>

    </header>
    <main>
        <Container className='my-4'>
    <Row>
                {["data","data","data","data",].map((item,i)=>(
                        <Col className='mt-5' sm={4}  md={4} key={i}>
                                 <WhiteListItem />
                          </Col>
                 ))}
               
            </Row>
        </Container>
    </main>
    <footer>
        <Footer/>
    </footer>
</>
  )
}

export default WhiteList
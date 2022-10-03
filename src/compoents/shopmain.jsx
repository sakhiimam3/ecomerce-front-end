import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ShopFilter from './shopFilter'
import ShopProduct from './shopProduct'

const shopmain = () => {
  return (
    <>
      <Container fluid className='mt-5'>
        <Row>
          <Col md={3} className="d-flex justify-content-center">
            <ShopFilter />
          </Col>
          <Col md={9}>
            <Row >
              {["data", "data", "data", "data", "data", "data"].map((item, i) => (
                <Col className='mb-5' sm={4} md={4} key={i}>
                  <ShopProduct />
                </Col>
              ))}

            </Row>

          </Col>
        </Row>
      </Container>


    </>
  )
}

export default shopmain
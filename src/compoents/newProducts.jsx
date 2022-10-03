import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import  Styles from "../styles/newProduct.module.scss"
import NewProduct from './newProduct'
const NewProducts = () => {
  return (
    <>
      
      <Container className={Styles.NewProducts}>
              <div className={Styles.NewProducts_Heading}>
                <h1>New Products</h1>

              </div>
            <Row >
                {["data","data","data","data","data","data"].map((item,i)=>(
                        <Col className='mt-5' sm={4}  md={4} key={i}>
                                 <NewProduct num={i}  />
                          </Col>
                 ))}
               
            </Row>
        </Container>
       
    </>
  )
}

export default NewProducts
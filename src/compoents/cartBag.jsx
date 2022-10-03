import CartItem from "./cartItem"
import {Container,Row,Col, Button}  from "react-bootstrap"
const CartBag = () => {
  return (
    <>
      <Container>
                   
                <Row >
                  <Col  md={8}>
                    <Row className="my-4">
                    <div className="d-flex justify-content-center my-3 text-light">
                       <h1>Your Cart </h1>
                   </div>
                  {["data","data","data","data","data","data"].map((item,i)=>(
                        <Col className='mt-3' sm={4}  md={4} key={i}>
                                 <CartItem />
                          </Col>
                 ))}
                 </Row>
                  </Col>
                 <Col md={4}  className="mt-5">
                 
                      <div className="mt-4" >
                           <div > 
                                  <h6 className="text-light text-center mb-5">MY BILL</h6>
                              </div>
                           <div className="products d-flex justify-content-around text-light">
                               <div> <span>Product</span>   </div>
                                <div> <span>$15400.00</span>  </div>
                           </div>
                            <hr className="text-light" />
                           <div className="products d-flex justify-content-around text-light">
                               <div> <span>Product</span> </div>
                                <div>$15400.00</div>
                           </div>
                           <hr className="text-light" />
                           <div  className="products d-flex justify-content-around text-light">
                               <div className="text-uppercase"><span>subtotal : </span></div>
                                <div><span>$18400.00</span></div>
                           </div>
                           <hr className="text-light" />
                           <div  className="products d-flex justify-content-around text-light">
                               <div><span  className="text-uppercase">tax</span></div>
                                <div><span>20%</span> : $8:00</div>
                           </div>
                             <div className="text-light d-flex align-items-center justify-content-center mt-5">
                                  <h3>Total : $16500,000</h3>
                                 
                             </div>

                             <div className="d-flex justify-content-center my-3 ">
                           <Button className="btn btn-dark btn-lg text-capitalize">checkout</Button>
                              </div>
                             
                      </div>
                   
                 </Col>
                  
            </Row>
          
             
           

          </Container>
    </>
  )
}

export default CartBag
import { useState } from "react"
import {Container,Row,Col}  from "react-bootstrap"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Header from "../compoents/Header"
import Footer from "../compoents/Footer"
import Styles from "../styles/productDetai.module.scss"
import Tshirt1 from "../assets/images/t-shirt1.jpg"
import Tshirt2 from "../assets/images/t-shirt2.png"
import Tshirt3 from "../assets/images/t-shirt3.png"
const ProductDetail = () => {
    const [Pimage,setPImage]=useState(Tshirt1)
  return (
    <> 
         <header>

          <Header />
         </header>
      <Container className="my-5 py-3">
                    
                <Row >
                   <Col sm={5} md={5} lg={5} xxl={5}>
                      
                      <div className={Styles.product_circular_images}>
                   
                         <div className={Styles.circular_top_image} >
                         <TransformWrapper>
        <TransformComponent>
        <img  className="img-fluid" src={Pimage} alt="Tshirt1" />
        </TransformComponent>
      </TransformWrapper>
                           
                         </div>
                         <div className={Styles.circular_bottom_images}>
                            
                           <div className={Styles.bottom1}>
                           <img src={Tshirt2} alt="T-shirt3"  onClick={()=>setPImage(Tshirt2)}/>
                            </div> 
                            <div className={Styles.bottom2}>
                            <img src={Tshirt3} alt="T-shirt3" onClick={()=>setPImage(Tshirt3)} />
                            </div>
                          
                         </div>
                      </div>
                    

                   </Col>
                   <Col sm={7} md={7} lg={7} xxl={7}>
                   <div  className={Styles.product_d_heading}>
                        <h5>product one</h5> 
                        </div>
                        
                         <div className={Styles.product_d_text}>
                         <button>Women</button> <br />
                        <span>Dresses</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Labore nemo ea nostrum neque quam aliquid natus fugit laborum, tempore qui.
                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Labore nemo ea nostrum neque quam aliquid natus fugit laborum, tempore qui.
                         </p>
                         </div>
                         <div className={Styles.product_d_quantity}>
                         <p>quanity : <span>1</span></p>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between flex-wrap sm-justify-content-center">
                              
                        <div className={Styles.product_d_check_btn}>
                        <h6 className="text-secondary fs-5 text-capitalize">size</h6>
                           
                            <input type="radio" id="s" value="s" name="size"/> 
                            <label htmlFor="s" >S</label>
                      
                            <input type="radio" id="l" value="l" name="size"/> 
                            <label  htmlFor="l" >L</label>
                         
                            <input type="radio" id="xl" value="xl" name="size"/> 
                            <label htmlFor="xl" >xL</label>
                        </div>
                        <div className={Styles.product_d_check_btn}>
                        <h6 className="text-secondary fs-5 text-capitalize">color</h6>
                            
                
                            <input type="radio"  id="Blue" value="Blue" name="color"/> 
                            <label  htmlFor="Blue">Blue</label>
                          
                            <input type="radio" id="Silver" value="Silver" name="color"/> 
                            <label  htmlFor="Silver">Silver</label>
                         
                            <input type="radio" id="White" value="White" name="color"/> 
                            <label htmlFor="White" >White</label>
                        </div>

                          
                        </div>
                        <div className="my-5 d-flex justify-content-between">
                                <button  className="btn btn-warning text-capitalize text-secondary fw-bold">add whishlist</button>
                                <button  className="btn btn-success  text-capitalize">add to Cart</button>
                          </div>
                    </div>
                   </Col>
                  
               </Row>
          
             
           

          </Container>
          <footer>
        <Footer />

          </footer>
          
    </>
  )
}

export default ProductDetail
import React from 'react'
import Footer from '../compoents/Footer'
import Header from '../compoents/Header'
import {Container,Row,Col} from "react-bootstrap"
import CartBag from '../compoents/cartBag'
const Account = () => {
  return (
   
    <>
    <header>
        <Header/>

    </header>
    <main>
           <CartBag />
    </main>
    <footer>
        <Footer/>
    </footer>
</>
  )
}

export default Account
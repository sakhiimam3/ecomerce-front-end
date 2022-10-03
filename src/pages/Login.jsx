import React from 'react'
import Footer from '../compoents/Footer'
import Header from '../compoents/Header'
import Logincomponent from "../compoents/Login"
const Login = () => {
  return (
   
    <>
    <header>
        <Header/>

    </header>
    <main>
      <Logincomponent />
    </main>
    <footer>
        <Footer/>
    </footer>
</>
  )
}

export default Login
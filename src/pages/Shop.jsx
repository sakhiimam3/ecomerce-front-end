import React from 'react'
import Footer from '../compoents/Footer'
import Header from '../compoents/Header'
import Shopmain from "../compoents/shopmain"

const Shop = () => {
  return (
    <>
     <div>
                <header>
                    <Header/>

                </header>
                <main className='my-5 py-2'>
                       <Shopmain />
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>

    </>
  )
}

export default Shop
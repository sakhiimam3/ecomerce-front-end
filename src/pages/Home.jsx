import React from 'react'
import Banner from '../compoents/Banner'
import Footer from '../compoents/Footer'
import Header from '../compoents/Header'
import Homeblog from '../compoents/Homeblog'
import NewProducts from '../compoents/newProducts'
const Home = () => {
    return (
        <>
            <div>
                <header>
                    <Header/>

                </header>
                 <Banner />
                <main>
                    <Homeblog />
                    <NewProducts />

                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>


        </>
    )
}

export default Home

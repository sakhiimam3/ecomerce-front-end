import React from 'react'
import Header from "../compoents/Header"
import Footer from "../compoents/Footer"
import SignUpcomponent from "../compoents/SignUp"

const SignUp = () => {


    return (
        <>
            <header>
                <Header/>

            </header>
            <main>
                <SignUpcomponent/>
            </main>
            <footer>
                <Footer/>
            </footer>


        </>

    )
}

export default SignUp

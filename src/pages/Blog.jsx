import React from 'react'

import BlogList from '../compoents/BlogList'
import Footer from '../compoents/Footer'
import Header from '../compoents/Header'


const Blog = () => {
  return (
   
    <>
    <header>
        <Header/>

    </header>
    <main>
       <BlogList />
    </main>
    <footer>
        <Footer/>
    </footer>
</>
  )
}

export default Blog
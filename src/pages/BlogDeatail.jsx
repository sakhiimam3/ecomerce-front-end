import React from 'react'
import Footer from '../compoents/Footer'
import Styles from "../styles/blogD.module.scss"
import Header from "../compoents/Header"
import { useParams } from 'react-router-dom'
const BlogDeatail = () => {
    const {id}=useParams()
    return (
        <>
           <header>
        <Header />

    </header>
            <section   className={Styles.BlogDeatail}>
                <div className='container my-5'>
                    <h5>title {id}</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas magni esse error dolore
                          quaerat necessitatibus nulla aliquid saepe, veniam eveniet mollitia voluptatem facere neque.
                           Odio placeat quam tempore delectus itaque nemo repudiandae, esse consectetur natus! Saepe 
                           provident veniam sed, nam animi, corporis, nesciunt cupiditate quos sapiente veritatis nemo 
                            voluptas. Sint vero fugiat libero veniam. Omnis nostrum, atque laudantium nihil repudiandae 
                           aperiam quasi eum hic. Aliquam doloremque impedit temporibus voluptates eligendi officia 
                           expedita totam atque, soluta laboriosam accusantium maxime ea possimus inventore omnis
                            voluptatum iusto sunt. Quibusdam alias, quasi quia repudiandae recusandae quam! Mollitia 
                            asperiores placeat ratione eaque nisi ipsa exercitationem!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas magni esse error dolore
                             quaerat necessitatibus nulla aliquid saepe, veniam eveniet mollitia voluptatem facere neque.
                            Odio placeat quam tempore delectus itaque nemo repudiandae, esse consectetur natus! Saepe 
                            provident veniam sed, nam animi, corporis, nesciunt cupiditate quos sapiente veritatis nemo 
                            voluptas. Sint vero fugiat libero veniam. Omnis nostrum, atque laudantium nihil repudiandae 
                            aperiam quasi eum hic. Aliquam doloremque impedit temporibus voluptates eligendi officia 
                            expedita totam atque, soluta laboriosam accusantium maxime ea possimus inventore omnis
                            voluptatum iusto sunt. Quibusdam alias, quasi quia repudiandae recusandae quam! Mollitia 
                             asperiores placeat ratione eaque nisi ipsa exercitationem!
                             quaerat necessitatibus nulla aliquid saepe, veniam eveniet mollitia voluptatem facere neque.
                           Odio placeat quam tempore delectus itaque nemo repudiandae, esse consectetur natus! Saepe 
                           provident veniam sed, nam animi, corporis, nesciunt cupiditate quos sapiente veritatis nemo 
                            voluptas. Sint vero fugiat libero veniam. Omnis nostrum, atque laudantium nihil repudiandae 
                           aperiam quasi eum hic. Aliquam doloremque impedit temporibus voluptates eligendi officia 
                           expedita totam atque, soluta laboriosam accusantium maxime ea possimus inventore omnis
                            voluptatum iusto sunt. Quibusdam alias, quasi quia repudiandae recusandae quam! Mollitia 
                            asperiores placeat ratione eaque nisi ipsa exercitationem!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas magni esse error dolore
                             quaerat necessitatibus nulla aliquid saepe, veniam eveniet mollitia voluptatem facere neque.
                            Odio placeat quam tempore delectus itaque nemo repudiandae, esse consectetur natus! Saepe 
                            provident veniam sed, nam animi, corporis, nesciunt cupiditate quos sapiente veritatis nemo 
                            voluptas. Sint vero fugiat libero veniam. Omnis nostrum, atque laudantium nihil repudiandae 
                            aperiam quasi eum hic. Aliquam doloremque i
                           </p>
                </div>

            </section>
            <footer>
        <Footer/>
    </footer>
        </>
    )
}

export default BlogDeatail

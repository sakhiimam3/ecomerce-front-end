import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from "../styles/shopProduct.module.scss"

const ShopProduct = () => {
  return (
    <>
  <div className={Styles.card}>
  <figure>
    <img className="img-fluid" src="https://www.kayazar.com/images/product_gallery/1652876610_WE-ARE-NOT-BEGGERS-001-A4-kayazar-t-shirt-Navy-Blue.webp" alt="t-shirt" />
  </figure>
  <section className={Styles.details}>
    <div className={Styles.min_details}>
      <h5>Remera <span >azul</span></h5>
      <h5 className={Styles.price}>$45.99</h5>
    </div>

    <div  className={Styles.options}>
      <div    className={Styles.options_size}>
        <h5 className='text-dark'>sizes</h5>
        <ul>
     
          <li>s</li>
          <li>L</li>
          <li>xl</li>
        </ul>
      </div>

      <div className={Styles.options_colors}>
        <h5 className='text-dark'>colors</h5>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <NavLink to="#" className={Styles.btn}>add to cart</NavLink>
  </section>
</div>
    
    </>
  )
}

export default ShopProduct
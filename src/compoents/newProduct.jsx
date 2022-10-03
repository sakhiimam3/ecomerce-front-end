import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from "../styles/newProduct.module.scss"

const NewProduct = (props) => {
  const {num}=props
  return (
    <>
    <NavLink to={`/shop/${num}`}>
      <div className={Styles.card}>
  <figure>
    <img className="img-fluid" src="https://static2.cilory.com/189111-thickbox_default/no-logo-royal-blue-full-sleeves-henley-t-shirt.jpg" alt="t-shirt" />
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
          <li>l</li>
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
</NavLink>
    </>
  )
}

export default NewProduct
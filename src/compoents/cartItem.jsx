import React from 'react'
import { MdDelete } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import Styles from "../styles/cartItems.module.scss"
const CartItem = () => {
  return (
    <>
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
          <li>m</li>
          <li>l</li>
    
        </ul>
        <div className='d-flex align-items-center'>
          <button className='btn btn-success'>+</button>  &nbsp;  <span className='fw-bold'>0</span>   &nbsp;  <button className='btn btn-success'>-</button> &nbsp;  <MdDelete className='fs-5 text-danger' /> Delete 
        </div>
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

export default CartItem
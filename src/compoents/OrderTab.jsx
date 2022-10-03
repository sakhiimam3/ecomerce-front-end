import React from 'react'
import { NavLink } from 'react-bootstrap'
import {BsFillEyeFill} from "react-icons/bs"
import Styles from "../styles/AboutTabs.module.scss"
const OrderTab = () => {
  return (
    <>
     <section className={Styles.orderd_tab}>

      <div className={Styles.orederd_id_numnber}>
          <div className='d-flex justify-content-between border-bottom pb-2'>
          <span>orderd id : 0323772791273981</span>
          <NavLink to="#"> <BsFillEyeFill/></NavLink>

          </div>
          <div className='d-flex justify-content-between border-bottom  py-4 pb-2'>
          <span>orderd id : 0323772791273981</span>
          <NavLink to="#"> <BsFillEyeFill/></NavLink>

          </div>
          <div className='d-flex justify-content-between border-bottom  py-4 pb-2'>
          <span>orderd id : 0323772791273981</span>
          <NavLink to="#"> <BsFillEyeFill/></NavLink>

          </div>
          
      </div>
    

     </section>
    
    </>
  )
}

export default OrderTab
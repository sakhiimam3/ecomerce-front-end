import React from 'react'
import Avatar from "../assets/images/about_avatar.png"
import Styles from "../styles/AboutTabs.module.scss"
const AboutmeTab = () => {
  return (
    <>
        <section className="d-flex justify-content-center py-5 my-5">
                <div className={Styles.Avatar_dev}>
                        <img   src={Avatar} alt="Avatar" />
                          <h5 className='text-light text-center mt-3'>Name : Sakhidad</h5>
                </div>
        </section>
    </>
  )
}

export default AboutmeTab
import React,{useEffect, useNavigate, useState} from 'react'
import {Badge, Container, Nav, Navbar} from 'react-bootstrap'
import {MdLogin} from "react-icons/md"
import {AiFillHeart, AiFillUnlock} from "react-icons/ai"
import Styles from "../styles/Header.module.scss"
import Logo from "../assets/images/logo.png"
import {NavLink, useSearchParams} from "react-router-dom"

const Navigation = () => {
 const [headerColor,setHeaderColor]=useState({backgroundColor:"#08071b"})




  useEffect(()=>{
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setHeaderColor({backgroundColor: '#08071b'})
        } else {
            setHeaderColor({backgroundColor: '#08071b'})
        }
      })

  },[headerColor])
    

    return (
        <>
            <Navbar className={
                     Styles.Nav_bar
                }
                style={{background:headerColor.backgroundColor}}
                expand="lg">
                <Container>
                    <Navbar.Brand>
                     <NavLink to="/">
                     <div className={
                            Styles.Logo
                        }>
                            <img className='img-fluid'
                                src={Logo}
                                alt="Logo"/>
                        </div>
                     </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll "/>
                        <Navbar.Collapse id="navbarScroll" >
                           <Nav className="me-auto my-2 my-lg-0 ml-auto " navbarScroll>
                            <Nav.Link className={
                                Styles.menu_links
                            }>
                                <NavLink className="links" to="/">Home</NavLink>
                            </Nav.Link>
                            <Nav.Link className={
                                Styles.menu_links
                            }>
                                <NavLink className="links" to="/shop">Shop</NavLink>
                            </Nav.Link>
                            <Nav.Link className={
                                Styles.menu_links
                            }>
                                <NavLink className="links" to="/blog">Blog</NavLink>
                            </Nav.Link>
                            <Nav.Link className={
                                Styles.menu_links
                            }>
                                <NavLink className="links" to="/account">Account</NavLink>
                            </Nav.Link>
                        </Nav>

                        <div>
                            <ul className={`${Styles.menu_end_dev} d-flex gap-4 text-light`}>
                                <li>
                                   <NavLink to="/login">
                                   <div>
                                        <MdLogin/>

                                    </div>
                                    <span>
                                        Login
                                    </span>
                                   </NavLink>
                                </li>
                                <li>
                                      <NavLink to="/whitelist">
                                      <div>
                                        <AiFillHeart/><Badge pill   bg="danger">0</Badge>

                                    </div>
                                    <span className='text-capitalize'>
                                        whishlist
                                    </span>
                                      </NavLink>
                                </li>
                                <li>
                                      <NavLink to="/cart">
                                      <div>
                                        <AiFillUnlock/><Badge pill   bg="danger">0</Badge>

                                    </div>
                                    <span>
                                        Bag 
                                    </span>
                                      </NavLink>
                                </li>


                            </ul>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navigation

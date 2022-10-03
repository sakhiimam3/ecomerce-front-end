import React, {useState} from 'react'
import Styles from "../styles/form.module.scss"
import {NavLink, useNavigate} from 'react-router-dom'

const SignUp = () => {
    const Navigate = useNavigate()
    const [inputField, setInputField] = useState({name: "", email: "", password: "", Cpassword: ""})

    // inputs handler
    const inputsHandler = (e) => {

        setInputField({
            ...inputField,
            [e.target.name]: e.target.value
        })

    }

    // submit function
    const submitSignUp = (e) => {
        e.preventDefault()

        if (inputField.email !== "" && inputField.password !== "") {
            alert(inputField.email)

        }


    }


    return (
        <>

            <section className={
                Styles.main_form_dev
            }>
                <form className={
                        Styles.form
                    }
                    onSubmit={submitSignUp}>
                    <div className="mb-3">
                        <label>Name</label>
                        <br/>
                        <input type="text"
                            onChange={inputsHandler}
                            value={
                                inputField ?. name
                            }
                            placeholder='Name'
                            name="name"/>

                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <br/>
                        <input type="email"
                            onChange={inputsHandler}
                            value={
                                inputField ?. email
                            }
                            placeholder='Email'
                            name="email"/>
                        <div className="text-light">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <br/>
                        <input type="password"
                            onChange={inputsHandler}
                            value={
                                inputField ?. password
                            }
                            placeholder='Password'
                            name="password"/>
                    </div>
                    <div className="mb-3">
                        <label>Confirm-Password</label>
                        <br/>
                        <input type="password"
                            onChange={inputsHandler}
                            value={
                                inputField ?. cpassword
                            }
                            placeholder='confirm password'
                            name="Cpassword"/>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>


                            <button className={
                                    Styles.signup_btn
                                }
                                onClick={
                                    () => Navigate("/signup")
                            }>
                                Sign Up
                            </button>


                        </div>
                        <div> {/* <span className='err'>
                                {usermessage}</span> */} </div>
                    </div>
                    <NavLink to="/login"
                        className={
                            Styles.already_account
                    }>
                        <span>already have an account?
                        </span>
                    </NavLink>
                </form>

            </section>


        </>

    )
}

export default SignUp

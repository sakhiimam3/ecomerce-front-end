import React, {useState} from 'react'
import Styles from "../styles/form.module.scss"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const Navigate=useNavigate()
    const [inputField, setInputField] = useState({email: "", password: ""})

    // inputs handler
    const inputsHandler = (e) => {

        setInputField({
            ...inputField,
            [e.target.name]: e.target.value
        })

    }

    // submit function
    const submitLogin = (e) => {
        e.preventDefault()

        if (inputField.email !== "" && inputField.password !== "") {
            alert(inputField.email)

        }


    }



    return (
        <>
          
     

        
            <section  className={Styles.main_form_dev} >
                <form className={Styles.form} onSubmit={submitLogin}>
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
                                inputField?.password
                            }
                            placeholder='Password'
                            name="password"/>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <button className={Styles.login_btn}
                                
                                type="submit">
                                Login
                            </button>
                            &nbsp;
                            <button className={Styles.login_btn}
                                 onClick={()=>Navigate("/signup")}
                                >
                                Sign Up
                            </button>
                        </div>
                       
                    </div>
                </form>
                </section>

        

        </>

    )
}

export default Login

import React, {useState} from 'react'
import Styles from "../styles/AboutTabs.module.scss"

const Settings = () => {

    const [inputField, setInputField] = useState({ oldpassword: "", newpassword: "",confirmPassword:""})

    // inputs handler
    const inputsHandler = (e) => {

        setInputField({
            ...inputField,
            [e.target.name]: e.target.value
        })

    }

    // submit function
    const submitChange = (e) => {
        e.preventDefault()

        if (inputField.oldpassword !== "" && inputField.newpassword !== ""  && inputField.confirmPassword !== "") {
            alert(inputField.oldpassword)

        }
        setInputField({ oldpassword: "", newpassword: "",confirmPassword:""})

    }



    return (
        <>
          
     

        
            <section  className={Styles.main_form_dev} >
                <form className={Styles.change_form} onSubmit={submitChange}>
                   <h3 className='text-light mb-5'>Change Password</h3>
                    <div className="mb-3">
                        <label>Old Password</label>
                        <br/>
                        <input type="password"
                            onChange={inputsHandler}
                            value={
                                inputField ?.oldpassword
                            }
                            placeholder='Old password'
                            name="oldpassword"/>
                       
                    </div>

                    <div className="mb-3">
                        <label>newpassword</label>
                        <br/>
                        <input type="password"
                            onChange={inputsHandler}
                            value={
                                inputField?.newpassword
                            }
                            placeholder='newpassword'
                            name="newpassword"/>
                    </div>
                    <div className="mb-3">
                        <label>C-Password</label>
                        <br/>
                        <input type="password"
                            onChange={inputsHandler}
                            value={
                                inputField?.confirmPassword
                            }
                            placeholder='confirmPassword'
                            name="confirmPassword"/>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <button className={Styles.change_button}
                                
                                type="submit">
                                Change
                            </button>
                            &nbsp;
                          
                        </div>
                       
                    </div>
                </form>
                </section>

        

        </>

    )
}

export default Settings

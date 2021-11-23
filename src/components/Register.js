import React from 'react'
import {Link} from 'react-router-dom'

import '../CSS/Register.css';

const Register = () => {

    return(
        <div className="register-from">
            <div className="register-title">
                <h1>Register Here!!!</h1>
            </div>
            <div className="register-context">
                <form className="form-container" >
                    <div>
                        <h2>Enter information below</h2>
                    </div>
                    {/** Username */}
                    <div className="form-group from-username">
                        <div className="label-title">
                            <h3>Username:</h3>
                        </div>
                        <label className="label-group">
                            <input/>
                        </label>

                    </div>

                    {/** Password */}
                    <div className="form-group from-password">
                        <div className="label-title">
                            <h3>Password:</h3>
                        </div>

                        <label className="label-group">
                            <input/>
                        </label> 
                    </div>

                    {/** Role */}
                    <div className="form-group from-role">
                        <div className="label-title">
                            <h3>Role:</h3>
                        </div>

                        <label className="label-group">
                            <select
                            >
                                <option value =''>--select an option--</option>
                                <option value ='client'>Client</option>
                                <option value ='instructor'>Instructor</option>  
                            </select>
                        </label> 
                    </div>         

                    {/* Submit */}
                    {/* <div > */}
                        <div >
                            <button className='submit-button' >Submit</button>
                        </div>
                    {/* </div>        */}
                </form>
            </div>

        </div>

    );
}

export default Register;
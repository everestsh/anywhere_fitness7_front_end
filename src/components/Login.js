import React from 'react'
import {Link} from 'react-router-dom'

import homeImg from '../assets/fitness3.jpg'
import '../CSS/Login.css';

const Login = () =>{

    return(
        <div className="login-from">
            <div className="login-context">
                <form className="login-container"  >
                    <div>
                        <h1> Please Sigin In ! </h1>
                    </div>
                    {/** Username */}
                    <div className="login-form-group from-username">
                        {/* <div className="label-title"> */}
                            <h3>Username:</h3>
                        {/* </div> */}
                        <label className="login-label-group">
                            <input
                            type='text'
                            name='username'
                            // value={user.username}
                            // placeholder = 'Please enter a username'
                            // onChange={handleChange}
                            />
                        </label>

                    </div>

                    {/** Password */}
                    <div className="login-form-group from-password">
                        {/* <div className="label-title"> */}
                            <h3>Password:</h3>
                        {/* </div> */}

                        <label className="login-label-group">
                            <input
                            type='text'
                            name='password'
                            // value={user.password}
                            // placeholder="Enter your password"
                            // onChange={handleChange}
                            />
                        </label> 
                    </div>

                    {/** Line */}
                    <div className="login-form-group from-role">
                        {/* <div className="label-title"> */}
                            {/* <h3>Role:</h3> */}
                        {/* </div> */}
                    </div>         

                    {/* Submit */}
                        <div >
                            <button  className='login-submit-button' >Login</button>
                        </div>
                </form>
            </div>

        </div>

    );
}

export default Login;
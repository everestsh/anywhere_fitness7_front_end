
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

import homeImg from '../assets/fitness3.jpg'
import '../CSS/Login.css';

const Login = () =>{
    const initusername ={
        username:'',
        password:''
    }
    const [user, setUser] = useState(initusername)
    const { push } = useHistory();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // push('/classes');
        axios.post(`https://ft-anywherefitness-7.herokuapp.com/api/auth/login`, user)  
        .then(resp => {                    
            console.log('resp in Login: ', resp);
            localStorage.setItem('token', resp.data.token);                    
            localStorage.setItem('role', resp.data.role);
            localStorage.setItem('message', resp.data.message);
            // props.setIsLoggedIn(localStorage.getItem('token'));      
            push(`/classes`);                 
        })
        .catch(err => {
            console.log(err);                
        })
    }

    return(
        <div className="login-from">
            <div className="login-context">
                <form className="login-container"  >
                    <div>
                        <h1> Please Sigin In ! </h1>
                    </div>
                    {/** Username */}
                    <div className="login-form-group from-username">
                            <h3>Username:</h3>
                        <label className="login-label-group">
                            <input
                            type='text'
                            name='username'
                            value={user.username}
                            placeholder = 'Please enter a username'
                            onChange={handleChange}
                            />
                        </label>

                    </div>

                    {/** Password */}
                    <div className="login-form-group from-password">
                            <h3>Password:</h3>

                        <label className="login-label-group">
                            <input
                            type='text'
                            name='password'
                            value={user.password}
                            placeholder="Enter your password"
                            onChange={handleChange}
                            />
                        </label> 
                    </div>
 
                    {/* Submit */}
                        <div >
                            <button onClick={handleSubmit} className='login-submit-button' >Login</button>
                        </div>
                </form>
            </div>

        </div>

    );
}

export default Login;
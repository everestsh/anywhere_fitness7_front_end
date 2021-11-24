import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';


import '../CSS/Register.css';

const Register = () => {
    const initusername ={
        username:'',
        password:'',
        role_type:''
        // department:''
    }
    const [user, setUser] = useState(initusername)
    const { push } = useHistory();

    console.log("Register ", user)
    console.log("Register username = ", user.username)
    console.log("Register ", user)


    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // push('/login');A
        axios.post(`https://ft-anywherefitness-7.herokuapp.com/api/auth/register`, user)
        .then(resp => {
            console.log('resp.data in Register.js: ', resp.data);
            // alert(`Your role is: ${resp.data.role}, you need your prop role to do something!`);
            push('/login');
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <div className="register-from">
            <div className="register-title">
                <h1>Register Here!!!</h1>
            </div>
            <div className="register-context">
                <form className="form-container"  >
                    <div>
                        <h2>Enter information below {user.username}</h2>
                    </div>
                    {/** Username */}
                    <div className="form-group from-username">
                        <div className="label-title">
                            <h3>Username:</h3>
                        </div>
                        <label className="label-group">
                            <input
                            type='text'
                            name='username'
                            value={user.username}
                            // placeholder = 'Please enter a username'
                            onChange={handleChange}
                            />
                        </label>

                    </div>

                    {/** Password */}
                    <div className="form-group from-password">
                        <div className="label-title">
                            <h3>Password:</h3>
                        </div>

                        <label className="label-group">
                            <input
                            type='text'
                            name='password'
                            value={user.password}
                            // placeholder="Enter your password"
                            onChange={handleChange}
                            />
                        </label> 
                    </div>

                    {/** Role */}
                    <div className="form-group from-role">
                        <div className="label-title">
                            <h3>Role:</h3>
                        </div>

                        <label className="label-group">
                            <select
                            // name="department"
                            name="role_type"
                            // value={user.role}
                            onChange={handleChange}
                            >
                                <option value =''>--select an option--</option>
                                <option value ='client'>Client</option>
                                <option value ='instructor'>Instructor</option>  
                            </select>
                        </label> 
                    </div>         

                    {/* Submit */}
                        <div >
                            <button onClick={handleSubmit} className='submit-button' >Submit</button>
                        </div>
                </form>
            </div>

        </div>

    );
}

export default Register;
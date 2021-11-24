import React, { useState } from 'react'


import '../CSS/Register.css';

const Register = () => {
    const initusername ={
        username:'',
        password:'',
        department:''
    }
    const [user, setUser] = useState(initusername)
    console.log("Register ", user)
    console.log("Register username = ", user.username)
    console.log("Register ", user)


    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className="register-from">
            <div className="register-title">
                <h1>Register Here!!!</h1>
            </div>
            <div className="register-context">
                <form className="form-container" >
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
                            name="department"
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
                            <button className='submit-button' >Submit</button>
                        </div>
                </form>
            </div>

        </div>

    );
}

export default Register;
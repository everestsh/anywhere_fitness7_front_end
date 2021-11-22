import React from 'react'
import {Link} from 'react-router-dom'

import homeImg from '../assets/fitness3.jpg'
import '../CSS/Home.css';

const Home = () =>{

    return(
            <div className="home-container">
                <div className="home-left">
                    <div className="home-welcome">
                        <h1>Welcome to Anywhere Fitness</h1>
                    </div>
                    <div>
                        <p>THESE DAYS, FITNESS CLASSES CAN BE HELD ANYWHERE- A PARK, AN UNFINISHED BASEMENT OR A GARAGE- NOT JUST AT A TRADITIONAL GYM. CERTIFIED FITNESS INSTRUCTORS NEED AN EASY WAY TO TAKE THE AWKWARDNESS OUT OF ATTENDANCE TAKING AND CLIENT PAYMENT PROCESSING.</p>
                    </div>
                    <div className="home-register"  >
                        <Link className="register-now" to='/register' >Register Now</Link>
                    </div>
                </div>
                <div className="home-right">
                    <img src={homeImg} alt="A woman with a barbell on her back"/>
                </div>
            </div>
    );
}

export default Home;
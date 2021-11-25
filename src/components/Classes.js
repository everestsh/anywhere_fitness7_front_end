import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import axios from 'axios';

const Classes = () =>{

    useEffect(() => {
        axios
        .get('https://ft-anywherefitness-7.herokuapp.com/api/classes')
        .then(res => {
            console.log(res);
            // setAllClasses(res.data);
        })
        .catch(err => {
            console.error(err);
        })
    
    }, []);

    return(
            <div className="home-container">
                <h1>Classes</h1>
            </div>
    );
}

export default Classes;
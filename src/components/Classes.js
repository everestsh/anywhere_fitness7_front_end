import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Class from './Class';

import axios from 'axios';

const Classes = () =>{
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios
        .get('https://ft-anywherefitness-7.herokuapp.com/api/classes')
        .then(res => {
            console.log(res);
            setClasses(res.data);
        })
        .catch(err => {
            console.error(err);
        })
    
    }, []);
    console.log("Classes = ", classes)

    return(
            <div className="home-container">
                {
                    classes.map( (item, index) => 
                        <Class key={index}/>
                    )
                }
       
            </div>
    );
}

export default Classes;
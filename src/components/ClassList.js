import React, {useEffect, useState} from 'react'
import ClassListSession from './ClassListSession';
import {Link} from 'react-router-dom'

import axios from 'axios';
import '../CSS/Classlist.css'

const ClassList = () =>{
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
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Intensity</th>
                    <th>Instructor</th>
                    <th>Location</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        classes.map((session, index)=><ClassListSession key={index} session={session}/>)
                    }
                </tbody>
                </table>
        </div>
    );
}

export default ClassList;
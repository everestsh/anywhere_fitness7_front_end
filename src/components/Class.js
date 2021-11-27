import React, {useEffect} from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';

import axios from 'axios';

const Class = () =>{


    const { id } = useParams();
    return(
            <div className="home-container">
                <h1>Class {id}</h1>
            </div>
    );
}

export default Class;
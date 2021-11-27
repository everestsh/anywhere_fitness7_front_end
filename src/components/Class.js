import React, {useEffect, useState} from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios';

const Class = () =>{
    const [classDetail, setClassDetail] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        axios
        .get(`https://ft-anywherefitness-7.herokuapp.com/api/classes/${id}`)     
        .then (resp => { 
            console.log(resp);               
            setClassDetail(resp.data);
        })
        .catch(err => {
            console.log(err);
        })
        
    }, [id]);
    console.log("Class = ", classDetail)

    return(
            <div className="home-container">
                <h1>Class {id}</h1> 
                <div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">	
                <h4 className="modal-title">{classDetail.class_name} Details</h4> 
                </div>
                <div className="modal-body">
                    <div className="flexContainer"> 

                        <section className="movie-details">                           
                            <div> <label>Class duration: <strong>{classDetail.class_duration}</strong></label> </div> 
                            <div> <label>Max class size: <strong>{classDetail.max_class_size}</strong></label> </div> 
                            <div> <label>Class Date: <strong>{classDetail.class_date} </strong></label> </div>
                            <div> <label>Time: <strong> {classDetail.start_time}</strong></label> </div>
                            <div> <label>Class location: <strong> {classDetail.class_location}</strong></label> </div>
                            <div> <label>Instructor: <strong>{classDetail.instructor}</strong></label> </div>
                            <div> <label>Intensity level: <strong>{classDetail.intensity_level}</strong></label> </div>                            
                            <div> <label>Type description: <strong>{classDetail.type_description}</strong></label> </div>                            
                            <div> <label>Number registered: <strong>{classDetail.number_registered}</strong></label> </div>                                                    
                            <div> <label>Class id: <strong>{classDetail.class_id}</strong></label> </div>                                                    
                        </section>
                        <section>
                            {/* {props.isLoggedIn && <span className="m-2 btn btn-dark">Add Class</span> }                                   
                            {props.isLoggedIn && <Link to={`/classes/${class_id}`} className="m-2 btn btn-success">Edit</Link>}
                            {props.isLoggedIn && <span className="delete" onClick = {handelDelete}  ><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>}                             */}
                        </section>       

                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
    );
}

export default Class;
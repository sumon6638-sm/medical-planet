import React from 'react';
import { Link } from 'react-router-dom';

const ShowDoctor = (props) => {
    const { rank, name, net_worth, img } = props.doctor;

    const dynamicURL = `/doctor/${rank}`

    return (
        <div className="col text-center my-5">
            <div className="card shadow">
                <img src={img} className="card-img-top img-fluid" style={{height: '300px'}} alt="..."/>
                <div class ="card-body">
                    <h5 class ="card-title">{name}</h5>
                    <p className="card-text">Fee: {net_worth}</p>

                    <Link to={dynamicURL}><button className="btn btn-outline-warning text-primary">Get Appoinment</button></Link>     
                </div>
            </div>
        </div>
    );
};

export default ShowDoctor;
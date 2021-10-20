import React from 'react';
import { Link } from 'react-router-dom';

const AllMedicalService = (props) => {
    const { id, serviceTitle, cost, description, img } = props.service

    const dynamicUrl = `/medicalService/${id}`

    return (
        <div className="row g-0 my-3 shadow rounded">
            <div className="col-md-4">
                <img src={img} className="img-fluid w-100 rounded" style={{height: "250px"}} alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{serviceTitle}</h5>
                    <p className="card-text">{description}</p>
                    <div className="text-center mb-3">
                        <Link to={dynamicUrl}><button className='btn btn-success text-warning fw-bold'><i className="fas fa-info-circle"></i>Read Details...</button></Link>
                    </div>
                    <p className="card-text"><small className="text-muted"><strong>Cost: ${cost}</strong></small></p>
                </div>
            </div>
        </div>
    );
};

export default AllMedicalService;
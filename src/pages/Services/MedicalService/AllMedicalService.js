import React from 'react';
import { Link } from 'react-router-dom';

const AllMedicalService = (props) => {
    const { id, serviceTitle, cost, description, img } = props.service

    const dynamicUrl = `/medicalService/${id}`

    return (
        <div class="row g-0 my-3 shadow rounded">
            <div class="col-md-4">
                <img src={img} class="img-fluid w-100 rounded" style={{height: "250px"}} alt="..."/>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{serviceTitle}</h5>
                    <p class="card-text">{description}</p>
                    <div className="text-center mb-3">
                        <Link to={dynamicUrl}><button className='btn btn-success text-warning fw-bold'><i class="fas fa-info-circle"></i>Read Details...</button></Link>
                    </div>
                    <p class="card-text"><small class="text-muted"><strong>Cost: ${cost}</strong></small></p>
                </div>
            </div>
        </div>
    );
};

export default AllMedicalService;
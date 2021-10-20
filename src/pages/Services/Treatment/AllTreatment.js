import React from 'react';
import { Link } from 'react-router-dom';

const AllTreatment = (props) => {

    const { id, treatmentTitle, cost, description, img } = props.treatment

    const dynamicUrl = `/treatment/${id}`

    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={img} className="card-img-top img-fluid" alt="..."/>
                <div class ="card-body">
                <h5 class ="card-title">{treatmentTitle}</h5>
                    <p className="card-text">{ description.slice(0,200)}</p>
                </div>
                
                <div className="text-center mb-3">
                    <Link to={dynamicUrl}><button className='btn btn-success text-warning fw-bold'><i className="fas fa-info-circle"></i>More Details...</button></Link>
                </div>

                <div class ="card-footer">
                    <small className="text-muted">Total cost: {cost}</small>
                </div>
            </div>
        </div>
    );
};

export default AllTreatment;
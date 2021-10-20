import React from 'react';
import { Link } from 'react-router-dom';

const ShowTreatment = (props) => {

    const { id, treatmentTitle, cost, description, img } = props.treatment
    
    const dynamicUrl = `/treatment/${id}`

    return (
        <div className="container card mb-3 shadow" style={{}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start h-100" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fw-bold" style={{fontFamily: 'Alconica'}}>{treatmentTitle}</h5>
                        <p className="card-text" >{description.slice(0, 100)}</p>

                        <Link to={dynamicUrl}><button className='btn btn-success text-warning fw-bold'><i className="fas fa-info-circle"></i> Details</button></Link>

                        <p className="card-text"><small className="text-muted">Total Cose: ${cost}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowTreatment;
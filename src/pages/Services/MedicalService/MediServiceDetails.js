import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MediServiceDetails = () => {
    const { details } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/medicalService.json')
            .then(res => res.json())
        .then(data=> setData(data))
    }, [])
    
    const disease = data.filter(find => find.id === details)
    console.log(disease);

    return (
        <div className="container">
            <div className='align-self-center shadow-lg my-4 rounded'>
                <img className='card-img-top img-fluid' style={{ height: "400px", width: '500px' }} src={disease[0]?.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title fw-bold text-center">{disease[0]?.serviceTitle}</h5>
                    <p className="card-text">{disease[0]?.description}</p>
                    <p className="card-text"><small className="text-muted fw-bold">Total Cost: ${disease[0]?.cost}</small></p>
                </div>

                <div className="text-center pb-3">
                    <Link to='/medicalServices'>
                        <button className='btn btn-danger'>Go to all Medical Service</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MediServiceDetails;
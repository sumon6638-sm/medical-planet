import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Service = () => {
    const { details } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/disease.json')
            .then(res => res.json())
        .then(data=> setData(data))
    }, [])
    
    const disease = data.filter(find => find.id === details)
    console.log(disease);

    return (
        <div className="container card">
            <div className='align-self-center shadow-lg my-4' style={{ width: "500px" }}>
                <img className='card-img-top img-fluid' style={{ height: "400px", width: '500px' }} src={disease[0]?.img} alt="" />
                <div class="card-body">
                    <h5 class="card-title fw-bold text-center">{disease[0]?.treatmentTitle}</h5>
                    <p class="card-text">{disease[0]?.description}</p>
                    <p class="card-text"><small class="text-muted fw-bold">Total Cost: ${disease[0]?.cost}</small></p>
                </div>

                <div className="text-center mb-3">
                    <Link to='/treatment'>
                        <button className='btn btn-danger'>Go to all Treatment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
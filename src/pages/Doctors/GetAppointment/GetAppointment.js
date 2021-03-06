import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const GetAppointment = () => {

    const {appoint} = useParams()

    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        fetch('/doctor.json')
            .then(res => res.json())
            .then(data => setDoctor(data[appoint]));
    }, [])

    return (
        <div className="container card">
            <div className='align-self-center shadow-lg my-4'>
                <img className='card-img-top img-fluid' src={doctor.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title fw-bold text-center">{doctor.name}</h5>
                    <p className="card-text fw-bold text-center"><small className="text-muted fw-bold">Total Cost: ${doctor.net_worth}</small></p>
                </div>

                <div className="text-center mb-3">
                    <Link to='/contact'>
                        <button className='btn btn-danger'>Get an Appoint</button>
                    </Link><br />

                    <Link to='/doctors'>
                        <button className='btn btn-outline-warning text-dark mt-4'>Show all Doctor</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GetAppointment;
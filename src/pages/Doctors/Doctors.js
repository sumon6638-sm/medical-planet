import React, { useEffect, useState } from 'react';
import ShowDoctor from './ShowDoctor';

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    },[])
    return (
        <div className='container'>
            <div className='text-center my-3'>
                <h2>We give you the world's best doctor</h2>
                <h4>For your treatment</h4>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    doctors.map(doctor => <ShowDoctor
                        key={doctor.rank}
                        doctor={doctor}
                    ></ShowDoctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;
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
    
    const appointment = doctor.filter(find => find.rank === appoint);
    // console.log(appointment);

    return (
        <div className="container card">
            <h2>{appoint}</h2>
            <div className='align-self-center shadow-lg my-4' style={{ width: "500px" }}>
                <img className='card-img-top img-fluid' style={{ height: "400px", width: '500px' }} src={appointment.img} alt="" />
                <div class="card-body">
                    <h5 class="card-title fw-bold text-center">{appointment.name}</h5>
                    <p class="card-text">{appointment[0]?.description}</p>
                    <p class="card-text"><small class="text-muted fw-bold">Total Cost: ${appointment[0]?.net_worth}</small></p>
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

export default GetAppointment;
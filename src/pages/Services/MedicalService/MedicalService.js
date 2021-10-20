import React, { useEffect, useState } from 'react';
import AllMedicalService from './AllMedicalService';


const MedicalService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./medicalService.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    

    return (
        <div className="container">
            <div className='mb-5'>
                <img src="https://images.squarespace-cdn.com/content/v1/5d036008358ba200010cda0c/1562797699110-34P8VE5OLLMMON9RQ54K/healthcare-services-redding-ca.jpg?format=2500w" className='img-fluid' alt="" />
            </div>

            <div className="my-3">
                <h2 className='text-center'>We try to give you the best medical service</h2>
                {
                    services.map(service =>
                        <AllMedicalService
                            key={service.id}
                            service={service}
                        ></AllMedicalService>
                    )
                }
            </div>
        </div>
    );
};

export default MedicalService;
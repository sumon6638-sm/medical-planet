import React, { useEffect, useState } from 'react';
import ShowMedicalService from './ShowMedicalService';

const MedicalService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./medicalService.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    

    return (
        <div class="row row-cols-1 row-cols-md-6 row-cols-xl-4 g-4">
            {
                services.map(service =>
                    <ShowMedicalService
                        key={service.id}
                        service={service}
                    ></ShowMedicalService>
                )
            }
        </div>
    );
};

export default MedicalService;
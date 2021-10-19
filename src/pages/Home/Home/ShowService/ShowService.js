import React, { useEffect, useState } from 'react';
import ShowMedicalService from './ShowMedicalService';
import ShowTreatment from './ShowTreatment';



const ShowService = () => {

    const [treatments, setTreatments] = useState([]);

    useEffect(() => {
        fetch('./disease.json')
            .then(res => res.json())
            .then(data => setTreatments(data));
    }, [])

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./medicalService.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div className='container mx-auto my-5 row'>
            <div class="col-xl-6 col-lg-12">
                <h2 className='text-center'>Our Medical Treatment For You!!!</h2>
                <div>
                    {
                        treatments.map(treatment =>
                            <ShowTreatment
                                key={treatment.id}
                                treatment={treatment}
                            ></ShowTreatment>
                        )
                    }
                </div>
            </div>

            <div class="col-xl-6 col-lg-12">
                <h2 className='text-center'>Our Medical Service For You!!!</h2>
                <div class="row row-cols-1 row-cols-md-1 row-cols-xl-1 g-4">
                    {
                        services.slice(0, 3).map(service =>
                            <ShowMedicalService
                                key={service.id}
                                service={service}
                            ></ShowMedicalService>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ShowService;
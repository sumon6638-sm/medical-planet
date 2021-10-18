import React, { useEffect, useState } from 'react';
import ShowTreatment from './ShowTreatment';

const Treatment = () => {

    const [treatments, setTreatments] = useState([]);

    useEffect(() => {
        fetch('./disease.json')
            .then(res => res.json())
            .then(data => setTreatments(data));
    }, [])
    
    return (
        <div className='col-xl-6 col-lg-6'>
            <h2>This is from Treatment</h2>
            {
                treatments.map(treatment =>
                    <ShowTreatment
                        key={treatment.id}
                        treatment={treatment}
                    ></ShowTreatment>
                )
            }
        </div>
    );
};

export default Treatment;

import React, { useEffect, useState } from 'react';
import AllTreatment from './AllTreatment';

const Treatment = () => {

    const [treatments, setTreatments] = useState([]);

    useEffect(() => {
        fetch('./disease.json')
            .then(res => res.json())
            .then(data => setTreatments(data));
    }, [])
    
    return (
        <div className='container'>
            <div className='my-3'>
                <img className='d-block w-100' src="https://coda.newjobs.com/api/imagesproxy/ms/cms/content30/images/hospitalist.jpg" alt="" />
                <h2 className='text-center mt-5'>We always try to make sure best hospitality</h2>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4 my-3'>
                
                {
                    treatments.map(treatment =>
                        <AllTreatment
                            key={treatment.id}
                            treatment={treatment}
                        ></AllTreatment>
                    )
                }
            </div>
        </div>
    );
};

export default Treatment;

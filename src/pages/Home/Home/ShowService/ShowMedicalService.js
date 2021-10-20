import React from 'react';

const ShowMedicalService = (props) => {
    const { id, serviceTitle, cost, description, img } = props.service

    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={img} className="card-img-top img-fluid rounded-3 px-5" style={{height: '250px'}} alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{serviceTitle}</h5>
                <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Total Cost: ${cost}</small>
                </div>
            </div>
        </div>
    );
};

export default ShowMedicalService;



// try accordion

// const service =
//     `
//             <div className="accordion-item">
//                 <h2 className="accordion-header" id="heading${id}">
//                     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${id}" aria-expanded="true" aria-controls="collapse${id}">
//                         ${serviceTitle}
//                     </button>
//                 </h2>
//                 <div id="collapse${id}" className="accordion-collapse collapse show" aria-labelledby="heading${id}" data-bs-parent="#accordionExample">
//                     <div className="accordion-body">
//                         <div>
//                             <img src={img} className='img-fluid' alt="" />
//                         </div>
//                         <strong>{serviceTitle}:</strong> {description}
//                     </div>
//                 </div>
//             </div>
//         `;

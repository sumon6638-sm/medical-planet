import React from 'react';

const ShowMedicalService = (props) => {
    const { id, serviceTitle, cost, description, img } = props.service

    
    
    return (
        <div class="col">
            <div class="card h-100 shadow">
                <img src={img} class="card-img-top img-fluid rounded-3 px-5" style={{height: '250px'}} alt="..."/>
                <div class ="card-body">
                <h5 class ="card-title">{serviceTitle}</h5>
                <p class ="card-text">{description}</p>
                </div>
                <div class ="card-footer">
                    <small class="text-muted">Total Cost: ${cost}</small>
                </div>
            </div>
        </div>
    );
};

export default ShowMedicalService;



// try accordion

// const service =
//     `
//             <div class="accordion-item">
//                 <h2 class="accordion-header" id="heading${id}">
//                     <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${id}" aria-expanded="true" aria-controls="collapse${id}">
//                         ${serviceTitle}
//                     </button>
//                 </h2>
//                 <div id="collapse${id}" class="accordion-collapse collapse show" aria-labelledby="heading${id}" data-bs-parent="#accordionExample">
//                     <div class="accordion-body">
//                         <div>
//                             <img src={img} className='img-fluid' alt="" />
//                         </div>
//                         <strong>{serviceTitle}:</strong> {description}
//                     </div>
//                 </div>
//             </div>
//         `;

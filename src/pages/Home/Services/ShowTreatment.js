import React from 'react';

const ShowTreatment = (props) => {

    const { treatmentTitle, cost, description, img} = props.treatment

    return (
        <div class="card mb-3 shadow" style={{maxWidth: "540px;"}}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={img} class="img-fluid rounded-start h-100 w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title fw-bold" style={{fontFamily: 'Alconica'}}>{treatmentTitle}</h5>
                        <p class="card-text" >{description.slice(0, 100)}</p>
                        <div className="btn btn-primary">Details</div>
                        <p class="card-text"><small class="text-muted">Total Cose: ${cost}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowTreatment;
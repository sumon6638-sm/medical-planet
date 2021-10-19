import React from 'react';

const ShowDoctor = (props) => {
    const { name, net_worth, img } = props.doctor;

    return (
        <div class="col text-center my-5">
            <div class="card shadow">
                <img src={img} class="card-img-top img-fluid" style={{height: '300px'}} alt="..."/>
                <div class ="card-body">
                    <h5 class ="card-title">{name}</h5>
                    <p class="card-text">Fee: {net_worth}</p>

                    <button className="btn btn-outline-warning text-primary">Get Appoinment</button>
                </div>
            </div>
        </div>
    );
};

export default ShowDoctor;
import React from 'react';

import aboutImg from '../../img/about/medical/about.png'

const About = () => {
    return (
        <div>
            <div className="container my-5 mx-auto g-4 d-flex">
                <div className="card col-md-6 shadow p-4 me-4">
                    <h5 className='fw-bold text-center'>WELCOME TO MEDICAL PLANET...
                        <br /> <br /> We are Developer. An online learning community</h5>

                    <p>Here, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts.</p>

                    <button className='btn btn-outline-primary'>MORE ABOUT US</button>
                </div>

                <div className="col-md-6 ms-4 my-auto">
                    <div className="row text-center">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-body bg-primary text-light fw-bold">
                                    <h1><i className="fab fa-discourse"></i></h1>
                                    <h2>506+</h2>
                                    <h5>Total Doctor</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-body bg-danger text-light fw-bold">
                                    <h1><i className="fas fa-trophy"></i></h1>
                                    <h2>Award</h2>
                                    <h5>From WHO</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-body bg-success text-light fw-bold">
                                    <h1><i className="fas fa-user-graduate"></i></h1>
                                    <h2>9560+</h2>
                                    <h5>Operation</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center'>
                <h2 className='fw-bold'>Sponsored By:</h2>
                <div>
                    <img className='img-fluid' src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
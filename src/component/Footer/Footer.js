import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark py-5'>
            <div className="row mx-3">
                <div className="col-md-4">
                    <h2 className='text-warning'>CONNECTED WITH US</h2>
                    <div className="mt-2">
                        <div className="text-center">
                            <img className='img-fluid' style={{ height: '100px' }} src="./logo.png" alt="" />
                        </div>
                        <p className='text-light'><i className="fas fa-map-marker-alt text-light"></i> 7-14, Nikunja Housing Society South Khulshi, Chittagong</p>

                        <p className='text-light'><i className="fas fa-phone-volume"></i> 88 031-2869877 , 88 031-2869899</p>
                        <p className='text-light'><i className="fas fa-envelope-open"></i> mdsumoncse19@gmail.com</p>
                    </div>
                </div>

                <div className="col-md-8">
                    <h3 className='text-start ms-5 text-warning'>USEFUL LINKS</h3>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="text-light text-start ms-5">
                                <li className='my-3'>Bangladesh University</li>
                                <li className='my-3'>Ministry Of Education</li>
                                <li className='my-3'>Education Board Bangladesh</li>
                                <li className='my-3'>Government Of Bangladesh</li>
                                <li className='my-3'>World Health Organizaiton</li>
                            </div>
                        </div>
                        <div className="col-md-4 text-warning">
                            <h3 className='text-success'>Stay Connected</h3>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <button className="btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <h6 className='text-warning mb-0 py-4 text-center'>© All Right Reserved Update Tech 2021</h6>
        </div>
    );
};

export default Footer;

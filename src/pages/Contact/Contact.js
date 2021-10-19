import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='container card my-5 shadow-lg py-5 contact'>
                <h1 className='fw-bold text-center mb-2'>CONTACT</h1>
                <div className='text-start ms-5 mt-2'>
                    <p><strong><i class="fas fa-location-arrow"></i> Location: </strong>7-14, Nikunja Housing Society, South Khulshi, Chittagong.</p>

                    <p><strong><i class="fas fa-map-marked-alt"></i> Permanent Campus: </strong>Plot# S-1, CDA Kolpolok Residential Area, Bakalia, Chittagong.</p>

                    <p><strong><i class="fas fa-id-card"></i> Contact: </strong>88 031-2869877</p>

                    <p><strong><i class="fas fa-mobile-alt"></i> Mobile: </strong>01851120791, 01773225500, 01773225511</p>

                    <p><strong><i class="fas fa-fax"></i> FAX: </strong>+880312869966</p>

                    <p><strong><i class="far fa-paper-plane"></i> Email: </strong>admission@sumon.edu.bd</p>
                </div>
            </div>

            <div className='container card shadow my-5 py-5 get-in-touch'>
                <h2 className='fw-bold text-center'>Get in Touch with US...</h2>
                <form class="row g-3 mt-3 px-3">
                    <div class="col-md-4">
                        <label for="validationDefault01" class="form-label">First name</label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="Md." required />
                    </div>
                    <div class="col-md-4">
                        <label for="validationDefault02" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationDefault02" placeholder="Sumon" required />
                    </div>
                    <div class="col-md-4">
                        <label for="validationDefaultUsername" class="form-label">Username</label>
                        <div class="input-group">
                            <span class="input-group-text" id="inputGroupPrepend2">@</span>
                            <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault03" class="form-label">City</label>
                        <input type="text" class="form-control" id="validationDefault03" required />
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault04" class="form-label">State</label>
                        <select class="form-select" id="validationDefault04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault05" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="validationDefault05" required />
                    </div>
                    <div className="col-md-12">
                        <label for="validationDefault05" class="form-label">Your Email</label>
                        <input type="email" class="form-control" id="validationDefault06" placeholder='@gmail.com' required />
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                            <label class="form-check-label" for="invalidCheck2">
                                Agree to terms and conditions
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
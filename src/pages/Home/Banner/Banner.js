import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://i.ibb.co/Wttn5fY/banner1.png" className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block text-dark">
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="https://i.ibb.co/By4S0Zy/banner3.png" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block bg-dark mb-5">
                        <h4 className='text-white'>Few industries match the scale of health care. In the United States alone, an estimated 85% of the population has at least 1 health care encounter annually and at least one quarter of these people experience 4 to 9 encounters annually.</h4>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="https://i.ibb.co/84k8Bpt/banner4.png" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block text-warning mb-5 ms-5 bg-success rounded mb-5">
                        <h4>DNA, or deoxyribonucleic acid, is the hereditary material in humans and almost all other organisms. Nearly every cell in a person’s body has the same DNA.</h4>
                    </div>
                </div>


            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;
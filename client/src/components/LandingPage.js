import React from 'react';
import NavbarComponent from './Navbar';
import CarouselComponent from './CarouselComponent';
import FooterComponent from './Footer';
import '../assets/css/LandingPage.css';
// import * as Instafeed from 'instafeed.js';

// const feed = new Instafeed({
//     get: 'tagged',
//     userId: 'awesome',
//     limit: 20,
//     resolution: 'standard_resolution',
//     accesToken: '',
//     sortBy: 'most-recent'
// });

// feed.run();
// <div id="instafeed"></div>

const LandingPage = () => {
    return (
        <div>
            <NavbarComponent />
            <div className="container-fluid full-div s-one text-center">
                <div className="row s-one-content">
                    <div className="col-12">
                        <h1>Welcome.</h1>
                        <p>At iDeviceRepairCV, we strive to provide the best repairs and customer service possible.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid full-div s-two text-center">
                <div className="row">
                    <div className="col-4">
                        One
                    </div>
                    <div className="col-4">
                        Two
                    </div>
                    <div className="col-4">
                        Three
                    </div>
                </div>
            </div>
            <br />
            <div className='container-fluid carousel-comp'>
                <CarouselComponent />
            </div>
            <br />
            <FooterComponent />
        </div>
    );
};

export default LandingPage;

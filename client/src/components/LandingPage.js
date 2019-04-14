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
            <div className="full-div s-one text-center">
                <div style={{maxWidth: '60%', margin: '0 auto'}}>
                    <img src="assets/images/logo.png" alt="logo" style={{width: '100%'}}/>
                </div>
                <br />
                <div className="s-one-content">
                    <h1>Welcome.</h1>
                    At iDeviceRepairCV, we strive to provide the best repairs and customer service possible.
                </div>
            </div>
            <br />
            {/* <div className="container-fluid full-div s-two text-center">
            </div>
            <br /> */}
            {/* <div className='carousel-comp'>
                <CarouselComponent />
            </div>
            <br /> */}
            <FooterComponent />
        </div>
    );
};

export default LandingPage;

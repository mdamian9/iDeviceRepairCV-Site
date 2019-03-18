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
            <br />
            <div className="container-fluid full-div text-center">
                <h1 className="welcome">Welcome!</h1>
            </div>
            <div className="container-fluid full-div s-two">
                <h1 className="text-center">
                    full
                </h1>
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

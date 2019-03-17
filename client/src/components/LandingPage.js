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
            <div className="full-div text-center">
                <h1 className="welcome">Welcome!</h1>
            </div>
            <div className="full-div s-two">
                <h1>
                    full
                    </h1>
            </div>
            <div className='carousel-comp'>
                <CarouselComponent />
            </div>
            <br />
            <FooterComponent />
        </div>
    );
};

export default LandingPage;

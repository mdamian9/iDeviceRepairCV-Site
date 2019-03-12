import React, { Component } from 'react';
import NavbarComponent from './Navbar';
import CarouselComponent from './CarouselComponent'
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

class LandingPage extends Component {
    render = () => {
        return (
            <div>
                <NavbarComponent />
                <br />
                <div className='carousel-comp'>
                    <h1>Welcome!</h1><br />
                    <CarouselComponent />
                </div>
            </div>
        );
    };
};

export default LandingPage;

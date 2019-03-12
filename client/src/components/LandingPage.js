import React, { Component } from 'react';
import NavbarComponent from './Navbar';
import CarouselComponent from './CarouselComponent'
import './css/LandingPage.css';
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
                <CarouselComponent />
            </div>
        );
    };
};

export default LandingPage;

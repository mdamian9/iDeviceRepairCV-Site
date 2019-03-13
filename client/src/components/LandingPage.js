import React, { Component } from 'react';
import NavbarComponent from './Navbar';
import CarouselComponent from './CarouselComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                <h1 className="text-center welcome">Welcome!</h1><br />
                <div className='carousel-comp'>
                    <CarouselComponent />
                </div>
                <br />
            </div>
        );
    };
};

export default LandingPage;

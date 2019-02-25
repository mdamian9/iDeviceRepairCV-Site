import React, { Component } from 'react';
import NavbarComponent from './Navbar';

class LandingPage extends Component {
    render = () => {
        return(
            <div>
                <p>LandingPage</p>
                <NavbarComponent />
            </div>
        );
    };
};

export default LandingPage;
import React from 'react';
import '../assets/css/Footer.css';

const FooterComponent = () => {
    return (
        <div className="container-fluid footer-comp align-items-center text-center">
            <div className="row d-flex justify-content-center">
                <div className="col-2">
                    <a href="/">
                        <i className="fa fa-home" /> Home
                    </a>
                </div>
                <div className="col-2">
                    <a href="/gallery">
                        <i className="fa fa-images" /> Gallery
                    </a>
                </div>
                <div className="col-2">
                    <a href="/about">
                        <i className="fa fa-info-circle" /> About Us
                </a>
                </div>
                <div className="col-2">
                    <a href="contact">
                        <i className="fa fa-envelope" /> Contact
                    </a>
                </div>
                <div className="col-2">
                    <a href="https://instagram.com/idevicerepaircv" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" /> Instagram
                    </a>
                </div>
            </div>
            <br />
            <div className="row d-flex justify-content-center">
                <div className="col-3">
                    <i className="fa fa-copyright" /> 2019 iDeviceRepairCV
                </div>
                <div className="col-3">
                    <i>
                        Powered by <a href="https://github.com/mdamian9" target="_blank" rel="noopener noreferrer">mdamian9</a>
                    </i>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;
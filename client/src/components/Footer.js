import React from 'react';
import '../assets/css/Footer.css';

const FooterComponent = () => {
    return (
        <div className="container-fluid footer-comp align-items-center text-center">
            <div className="row d-flex justify-content-center">
                <div className="col-2">
                    <i className="fa fa-home" /> Home
                </div>
                <div className="col-2">
                    <i className="fa fa-images" /> Gallery
                </div>
                <div className="col-2">
                    <i className="fa fa-info-circle" /> About Us
                </div>
                <div className="col-2">
                    <i className="fa fa-envelope" /> Contact
                </div>
                <div className="col-2">
                    <i className="fab fa-instagram" /> Instagram
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;
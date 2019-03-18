import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../assets/css/Navbar.css';

const NavbarComponent = () => {
    return (
        <div className="navbar-comp">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><span className="navlink-comp">iDeviceRepairCV</span></NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/"><span className="navlink-comp"><i className="fa fa-images" /> Gallery</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/aboutus"><span className="navlink-comp"><i className="fa fa-info-circle" /> About Us</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contact"><span className="navlink-comp"><i className="fa fa-envelope" /> Contact</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><span className="navlink-comp"><i className="fab fa-instagram" /> Instagram</span></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div >
    );
};

export default NavbarComponent;

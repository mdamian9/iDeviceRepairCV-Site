import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../assets/css/Navbar.css';

class NavbarComponent extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="navbar-comp">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">iDeviceRepairCV</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/"><span className="navlink-comp">Home</span></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/aboutus"><span className="navlink-comp">About Us</span></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact"><span className="navlink-comp">Contact</span></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div >
        );
    }

};

export default NavbarComponent;

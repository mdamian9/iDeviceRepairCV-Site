import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './css/Navbar.css';

class NavbarComponent extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">iDeviceRepairCV</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="test">
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/aboutus">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div >
        );
    }

};

export default NavbarComponent;

import React, { Component } from 'react';
import '../scss/main.scss';
import { NavLink } from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize'

class Header extends Component {
    render() {
        return (
            <Navbar className="teal" brand={`CryptoPrice`} right>
                <NavItem><NavLink to="/#">Start</NavLink></NavItem>
                <NavItem><NavLink to="/fav">Fav</NavLink></NavItem>
            </Navbar>

        );
    }
}

export { Header };


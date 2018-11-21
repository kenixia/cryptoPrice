import React, { Component } from 'react';
import '../scss/main.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="teal">
                <div className="nav-wrapper container">
                    <a href="/#" className="brand-logo">CryptoPrice</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/singlecoin">Go to contact</NavLink></li>
                        {/*<li><a href="/singlecoin">Components</a></li>*/}
                        {/*<li><a href="/singlecoin">JavaScript</a></li>*/}
                    </ul>
                </div>
            </nav>

        );
    }
}

export { Header };
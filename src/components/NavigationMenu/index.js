import React, { Component } from 'react';
import { Link } from 'react-router';

import './navigation-menu.scss';

export default class NavigationMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div className="navigation-menu">
                <h1 className="navigation-my-name">russ rinzler</h1>
                <div className="navigation-menu-toggle" onClick={() => this.toggleMenu()}>
                    <div className="hamburger-line" />
                    <div className="hamburger-line" />
                    <div className="hamburger-line" />
                </div>
                <ul className="navigation-links">
                    <li>
                        <Link to="/">about</Link>
                    </li>
                    <li>
                        work
                    </li>
                    <li>
                        <Link to="/work/credit-karma">credit karma</Link>
                    </li>
                    <li>
                        <Link to="/work/granicus">granicus</Link>
                    </li>
                    <li>
                        play
                    </li>
                    <li>
                        <Link to="/play/orthofloat">orthofloat</Link>
                    </li>
                    <li>
                        <Link to="/play/trendtrend">trendtrend</Link>
                    </li>
                    <li>
                        <Link to="/links-contact">links & contact</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

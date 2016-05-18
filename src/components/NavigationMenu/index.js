import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

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
        const navMenuClass = classNames('navigation-menu', { 'is-open': this.state.isOpen });
        return (
            <div className={navMenuClass}>
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
                    <li className="nested-link">
                        <Link to="/work/credit-karma">credit karma</Link>
                    </li>
                    <li className="nested-link">
                        <Link to="/work/granicus">granicus</Link>
                    </li>
                    <li>
                        play
                    </li>
                    <li className="nested-link">
                        <Link to="/play/orthofloat">orthofloat</Link>
                    </li>
                    <li className="nested-link">
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

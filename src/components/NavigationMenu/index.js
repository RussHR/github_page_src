import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import velocity from 'velocity-animate';

import './navigation-menu.scss';

export default class NavigationMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen }, () => {
            velocity(this.navLinksEl, this.state.isOpen ? 'slideDown' : 'slideUp', {
                duration: 500,
                easing: 'ease-out'
            });
        });
    }

    render() {
        const navToggleClass = classNames('navigation-menu-toggle', { 'is-open': this.state.isOpen });
        return (
            <div className="navigation-menu">
                <h1 className="navigation-my-name">
                    <Link to="/">russ rinzler</Link>
                </h1>
                <div className={navToggleClass} onClick={() => this.toggleMenu()}>
                    <div className="hamburger-line" />
                    <div className="hamburger-line" />
                    <div className="hamburger-line" />
                </div>
                <ul className="navigation-links" ref={c => this.navLinksEl = c}>
                    <li>
                        <Link to="/">about</Link>
                    </li>

                    <li>
                        play
                    </li>
                    <li className="nested-link">
                        <Link activeClassName="nav-link-active" to="/play/homage-to-barragan">homage to barrágan</Link>
                    </li>
                    <li className="nested-link">
                        <Link activeClassName="nav-link-active" to="/play/autobiography-1">autobiography 1</Link>
                    </li>
                    <li className="nested-link">
                        <Link activeClassName="nav-link-active" to="/play/orthofloat">orthofloat</Link>
                    </li>
                    <li className="nested-link">
                        <Link activeClassName="nav-link-active" to="/play/trendtrend">trendtrend</Link>
                    </li>
                    <li>
                        <Link activeClassName="nav-link-active" to="/links-contact">links & contact</Link>
                    </li>

                    <li>
                        work
                    </li>
                    <li className="nested-link">
                        <Link activeClassName="nav-link-active" to="/work/credit-karma">credit karma</Link>
                    </li>
                    <li className="nested-link">
                        <Link activeClassName="nav-link-active" to="/work/granicus">granicus</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

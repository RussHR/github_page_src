import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            <header role="banner" className="navigation-menu">
                <h1 className="navigation-my-name">
                    <Link to="/">russ rinzler</Link>
                </h1>
                <button className={navToggleClass} onClick={() => this.toggleMenu()}>
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </button>
                <nav role="navigation">
                    <ul className="navigation-links" ref={c => this.navLinksEl = c}>
                        <li className="link-preceding-new-section">
                            <NavLink to="/">home</NavLink>
                        </li>

                        <li>
                            play
                        </li>
                        <li className="link-preceding-new-section">
                            <ul className="nested-link-list">
                                <li className="nested-link">
                                    <NavLink activeClassName="nav-link-active" to="/play/homage-to-barragan">homage to barrágan</NavLink>
                                </li>
                                <li className="nested-link">
                                    <NavLink activeClassName="nav-link-active" to="/play/autobiography-1">autobiography 1</NavLink>
                                </li>
                                <li className="nested-link">
                                    <NavLink activeClassName="nav-link-active" to="/play/orthofloat">orthofloat</NavLink>
                                </li>
                                <li className="nested-link">
                                    <NavLink activeClassName="nav-link-active" to="/play/trendtrend">trendtrend</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            work
                        </li>
                        <li className="link-preceding-new-section">
                            <ul className="nested-link-list">
                                <li className="nested-link">
                                    <NavLink activeClassName="nav-link-active" to="/work/slack">Slack</NavLink>
                                </li>
                                <li className="nested-link">
                                    <NavLink activeClassName="nav-link-active" to="/work/credit-karma">Credit Karma</NavLink>
                                </li>
                                <li className="nested-link">
                                    <NavLink activeClassName="nav-link-active" to="/work/granicus">Granicus</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <NavLink activeClassName="nav-link-active" to="/links-contact">links & contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

import React, { Component } from 'react';

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
            </div>
        );
    }
}

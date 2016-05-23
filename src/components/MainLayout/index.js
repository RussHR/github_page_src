import React, { Component, PropTypes } from 'react';
import NavigationMenu from '../NavigationMenu';
import Orthofloat from '../Orthofloat';

import './main-layout.scss';

export default class MainLayout extends Component {
    render() {
        return (
            <div>
                <NavigationMenu />
                <div className="main-content">
                    {this.props.children}
                </div>
                <div className="current-background">
                    <Orthofloat hue={Math.random()} />
                </div>
            </div>
        );
    }
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
};
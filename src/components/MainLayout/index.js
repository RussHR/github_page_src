import React, { Component, PropTypes } from 'react';
import NavigationMenu from '../NavigationMenu';
import Orthofloat from '../Orthofloat';

import './main-layout.scss';

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = { hue: Math.random() };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.setState({ hue: Math.random() });
        }
    }

    render() {
        return (
            <div>
                <NavigationMenu />
                <div className="main-content">
                    {this.props.children}
                </div>
                <div className="current-background">
                    <Orthofloat hue={this.state.hue} />
                </div>
            </div>
        );
    }
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};
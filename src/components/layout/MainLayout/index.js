import React, { Component, PropTypes } from 'react';
import NavigationMenu from '../../NavigationMenu';
import Orthofloat from 'orthofloat';
import { randomWithRange } from '../../../businessLogic/mathHelpers';

import './main-layout.scss';

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = { hue: Math.random() };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.changeHue();
        }
    }

    changeHue() {
        let { hue } = this.state;
        hue += randomWithRange(1/6, 5/6);
        if (hue >= 1) {
            hue -= 1;
        }
        this.setState({ hue });
    }

    render() {
        return (
            <div className="main-layout">
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
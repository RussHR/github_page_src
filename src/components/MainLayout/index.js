import React, { Component, PropTypes } from 'react';
import Orthofloat from '../Orthofloat';

import './main-layout.scss';

export default class MainLayout extends Component {
    render() {
        return (
            <div>
                <div className="current-content">
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
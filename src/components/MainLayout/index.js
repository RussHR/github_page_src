import React, { Component } from 'react';

import './main-layout.scss';

export default class MainLayout extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

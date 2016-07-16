import React, { Component, PropTypes } from 'react';
import NavigationMenu from '../../NavigationMenu';
import Orthofloat, { randomRGB, randomWithRange } from 'orthofloat';
import './main-layout.scss';

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topColor: randomRGB(),
            bottomColor: randomRGB(),
            cameraAngle: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.changeHue();
        }
    }

    changeHue() {
        this.setState({
            topColor: randomRGB(),
            bottomColor: randomRGB(),
            cameraAngle: randomWithRange(0, 360)
        });
    }

    render() {
        const { bottomColor, topColor, cameraAngle } = this.state;

        return (
            <div className="main-layout">
                <NavigationMenu />
                <div className="main-content">
                    {this.props.children}
                </div>
                <div className="current-background">
                    <Orthofloat topColor={topColor} bottomColor={bottomColor} cameraAngle={cameraAngle} />
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
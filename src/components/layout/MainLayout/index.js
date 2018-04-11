import React, { PropTypes } from 'react';
import NavigationMenu from '../../NavigationMenu';
import './main-layout.scss';

export default function MainLayout({ children }) {
    return (
        <div className="main-layout">
            <div className="main-layout-bg" />
            <NavigationMenu />
            <div className="main-content">
                {children}
            </div>
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
};
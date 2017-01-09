import React, { PropTypes } from 'react';
import NavigationMenu from '../../NavigationMenu';
import './main-layout.scss';

export default function MainLayout({ children }) {
    return (
        <div className="main-layout">
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
import React from 'react';
import PropTypes from 'prop-types';
import { times } from 'lodash';
import NavigationMenu from '../../NavigationMenu';
import './main-layout.scss';

const triangles = times(10, (i) => {
    const style = { left: `${parseInt(Math.random() * 100 - 7, 10)}%` };

    return (
        <div className={`main-layout-bg-triangle main-layout-bg-triangle-${i}`} key={i} style={style} />
    );
});

export default function MainLayout({ children }) {
    return (
        <div className="main-layout">
            <div className="main-layout-bg">
                {triangles}
            </div>
            <NavigationMenu />
            <main className="main-content">
                {children}
            </main>
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
};
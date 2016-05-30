import React, { PropTypes } from 'react';

import './content-layout.scss';

export default function ContentLayout({ header, subheader, mainLink, children }) {
    return (
        <div>
            <h1 className="content-header">{header}</h1>
            <h3>{subheader}</h3>
            <p>
                <a href={mainLink} target="_blank" className="main-link">{mainLink}</a>
            </p>
            {children}
        </div>
    );
}

ContentLayout.propTypes = {
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    mainLink: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};
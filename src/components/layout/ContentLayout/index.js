import React, { PropTypes } from 'react';

import './content-layout.scss';

export default function ContentLayout({ header, subheader, links, children }) {
    return (
        <div>
            <h1 className="content-header">{header}</h1>
            <h3>{subheader}</h3>
            {links.map((link, index) =>
                <p key={index}>
                    <a href={link} target="_blank" className="main-link">{link}</a>
                </p>
            )}
            {children}
        </div>
    );
}

ContentLayout.propTypes = {
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.node.isRequired
};
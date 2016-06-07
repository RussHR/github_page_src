import React, { PropTypes } from 'react';

import './content-layout.scss';

export default function ContentLayout({ header, subheader, links, children }) {
    return (
        <div>
            <h1 className="content-header">{header}</h1>
            {subheader ? <h3>{subheader}</h3> : null}
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
    subheader: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.node.isRequired
};

ContentLayout.defaultProps = {
    links: []
};
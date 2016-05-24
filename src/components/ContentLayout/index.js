import React, { PropTypes } from 'react';

import './content-layout.scss';

export default function ContentLayout() {
    return (
        <div>
            <h1 className="content-header">{this.props.header}</h1>
            {this.props.children}
        </div>
    );
}

ContentLayout.propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};
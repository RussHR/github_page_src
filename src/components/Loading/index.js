import React from 'react';
import PropTypes from 'prop-types';

import './loading.scss';

export default function Loading({ style }) {
    return (
        <span className="loading" style={style}>
            loading
        </span>
    );
}

Loading.propTypes = {
    style: PropTypes.shape({
        color: PropTypes.string
    })
};
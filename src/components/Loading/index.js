import React from 'react';
import PropTypes from 'prop-types';

import './loading.scss';

export default function Loading({ style }) {
    return (
        <div className="loading" style={style}>
            loading
        </div>
    );
}

Loading.propTypes = {
    style: PropTypes.shape({
        color: PropTypes.string
    })
};
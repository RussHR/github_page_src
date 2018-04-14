import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';

import './video-iframe.scss';

export default function VideoIFrame({ style, src }) {
    return (
        <div className="vimeo-wrapper" style={style}>
            <Loading />
            <iframe src={src}
                className="vimeo-video"
                frameBorder="0"
                allowFullScreen />
        </div>
    );
}

VideoIFrame.propTypes = {
    style: PropTypes.shape({
        width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
        paddingBottom: PropTypes.string.isRequired
    }).isRequired,
    src: PropTypes.string.isRequired
};
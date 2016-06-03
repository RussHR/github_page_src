import React, { PropTypes } from 'react';

import './video-iframe.scss';

export default function VideoIFrame({ style, src }) {
    return (
        <div className="vimeo-wrapper" style={style}>
            <iframe src={src}
                className="vimeo-video"
                frameBorder="0"
                webkitAllowFullScreen
                mozallowfullscreen
                allowFullScreen />
        </div>
    );
}

VideoIFrame.propTypes = {
    style: PropTypes.shape({
        width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
        heightWidthRatio: PropTypes.number.isRequired       
    }).isRequired,
    src: PropTypes.string.isRequired
};
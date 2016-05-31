import React, { PropTypes } from 'react';

import './vimeo-video.scss';

export default function VimeoVideo({ style, src }) {
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

VimeoVideo.propTypes = {
    style: PropTypes.shape({
        width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
        heightWidthRatio: PropTypes.number.isRequired       
    }).isRequired,
    src: PropTypes.string.isRequired
};
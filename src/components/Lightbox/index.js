import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';

import './lightbox.scss';

export default function Lightbox({ image, onClose }) {
    return (
        <div className="lightbox" onClick={onClose}>
            <Loading style={{ color: 'white' }} />
            <img className="lightbox-image" src={image.src} srcSet={image.srcset} alt={image.alt} />
        </div>
    );
}

Lightbox.propTypes = {
    image: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        thumbAlt: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        srcset: PropTypes.string.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired    
};
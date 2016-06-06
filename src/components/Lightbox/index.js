import React, { PropTypes } from 'react';

import './lightbox.scss';

export default function Lightbox({ image, onClose }) {
    return (
        <div className="lightbox" onClick={onClose}>
            <img className="lightbox-image" src={image.src} alt={image.alt} />
        </div>
    );
}

Lightbox.propTypes = {
    image: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        thumbAlt: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired    
};
import React, { Component, PropTypes } from 'react';

import './image-gallery.scss';

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);

        this.state = { lightboxIsOpen: false };
    }

    openLightbox(index) {
        console.log(this.props.images[index]);
    }

    render() {
        return (
            <div>
                {this.props.images.map((image, i) =>
                    <img className="image-gallery-thumbnail"
                         src={image.thumbnail}
                         key={i}
                         onClick={() => this.openLightbox(i)}
                         alt={image.thumbAlt} />
                )}
            </div>
        );
    }
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        thumbAlt: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    })).isRequired
};
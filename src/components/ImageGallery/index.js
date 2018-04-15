import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lightbox from '../Lightbox';

import './image-gallery.scss';

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);

        this.state = { currentImageIndex: null };
    }

    openLightbox(currentImageIndex) {
        this.setState({ currentImageIndex });
    }

    closeLightbox() {
        this.setState({ currentImageIndex: null });
    }

    render() {
        const { images } = this.props;
        const { currentImageIndex } = this.state;
        const lightbox = currentImageIndex !== null
            ? (
                <Lightbox
                    image={images[currentImageIndex]}
                    onClose={() => this.closeLightbox()}
                    upperLeftCaption={`Image ${currentImageIndex + 1} of ${images.length}`}
                    lowerCaption={images[currentImageIndex]['alt']}
                />
            )
            : null;

        return (
            <section className="image-gallery">
                {images.map((image, i) =>
                    <button onClick={() => this.openLightbox(i)} key={i}>
                        <img className="image-gallery-thumbnail"
                             src={image.thumbnail}
                             alt={image.thumbAlt}
                         />
                    </button>
                )}
                {lightbox}
            </section>
        );
    }
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        thumbAlt: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        srcset: PropTypes.string.isRequired
    })).isRequired
};
import React, { Component, PropTypes } from 'react';
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
        const lightbox = this.state.currentImageIndex !== null
            ? <Lightbox image={this.props.images[this.state.currentImageIndex]}
                        onClose={() => this.closeLightbox()}/>
            : null;

        return (
            <div>
                {this.props.images.map((image, i) =>
                    <img className="image-gallery-thumbnail"
                         src={image.thumbnail}
                         key={i}
                         onClick={() => this.openLightbox(i)}
                         alt={image.thumbAlt} />
                )}
                {lightbox}
            </div>
        );
    }
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        thumbAlt: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired
    })).isRequired
};
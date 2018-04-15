import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lightbox from '../Lightbox';

import './image-gallery.scss';

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);

        this.state = { currentImageIndex: null };

        this.showPrevImage = this.showPrevImage.bind(this);
        this.showNextImage = this.showNextImage.bind(this);
    }

    openLightbox(currentImageIndex) {
        this.setState({ currentImageIndex });
    }

    closeLightbox() {
        this.setState({ currentImageIndex: null });
    }

    showPrevImage() {
        this.setState(({ currentImageIndex }, { images }) => {
            let newImageIndex = currentImageIndex - 1;
            if (newImageIndex < 0) {
                newImageIndex = images.length - 1;
            }

            return { currentImageIndex: newImageIndex };
        });
    }

    showNextImage() {
        this.setState(({ currentImageIndex }, { images }) => {
            let newImageIndex = currentImageIndex + 1;
            if (newImageIndex >= images.length) {
                newImageIndex = 0;
            }

            return { currentImageIndex: newImageIndex };
        });
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
                    onClickPrevImage={this.showPrevImage}
                    onClickNextImage={this.showNextImage}
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
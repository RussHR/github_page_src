import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lightbox from '../Lightbox';
import { get } from 'lodash';

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
            return { currentImageIndex: this.getPrevIndex(currentImageIndex, images.length) };
        });
    }

    showNextImage() {
        this.setState(({ currentImageIndex }, { images }) => {
            return { currentImageIndex: this.getNextIndex(currentImageIndex, images.length) };
        });
    }

    getPrevIndex(oldIndex, numImages) {
        let newImageIndex = oldIndex - 1;
        if (newImageIndex < 0) {
            newImageIndex = numImages - 1;
        }

        return newImageIndex;
    }

    getNextIndex(oldIndex, numImages) {
        let newImageIndex = oldIndex + 1;
        if (newImageIndex >= numImages) {
            newImageIndex = 0;
        }

        return newImageIndex;
    }

    preloadAdjacentImages() {
        const { images } = this.props;
        const { currentImageIndex } = this.state;
        const numImages = images.length;

        const prevImage = new Image();
        const nextImage = new Image();

        prevImage.src = get(images, `[${this.getPrevIndex(currentImageIndex, numImages)}].src`);
        nextImage.src = get(images, `[${this.getNextIndex(currentImageIndex, numImages)}].src`);
    }

    render() {
        const { images } = this.props;
        const { currentImageIndex } = this.state;
        let lightbox = null;

        // checking for null since this may be zero
        if (currentImageIndex !== null) {
            this.preloadAdjacentImages();

            lightbox = (
                <Lightbox
                    image={images[currentImageIndex]}
                    onClose={() => this.closeLightbox()}
                    upperLeftCaption={`Image ${currentImageIndex + 1} of ${images.length}`}
                    lowerCaption={get(images, 'currentImageIndex.alt', 'No caption found.')}
                    onClickPrevImage={this.showPrevImage}
                    onClickNextImage={this.showNextImage}
                />
            );
        }

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
        srcset: PropTypes.string
    })).isRequired
};
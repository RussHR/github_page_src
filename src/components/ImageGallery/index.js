import React, { Component, PropTypes } from 'react';

import './image-gallery.scss';

export default class ImageGallery extends Component {
    render() {
        return (
            <div>
                {this.props.images.map((image, i) =>
                    <img src={image.thumbnail} key={i} className="image-gallery-thumbnail" />
                )}
            </div>
        );
    }
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        thumbnail: PropTypes.string.isRequired
    })).isRequired
};
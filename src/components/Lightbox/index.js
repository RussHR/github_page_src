import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';

import './lightbox.scss';

export default class Lightbox extends PureComponent {
    constructor(props) {
        super(props);

        this.handleKeyboardEvent = this.handleKeyboardEvent.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyboardEvent);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyboardEvent);
    }

    handleKeyboardEvent({ keyCode }) {
        if (keyCode === 27) {
            // esc key
            this.props.onClose();
        }
    }

    render() {
        const { image, onClose } = this.props;

        return (
            <section className="lightbox" onClick={onClose}>
                <header className="lightbox-header">
                    <span className="lightbox-which-photo">Image 0 of 0</span>
                    <button className="lightbox-close" autoFocus>&#10005;</button>
                </header>
                <section className="lightbox-image-viewer">
                    <button className="lightbox-change-image">&#9664;</button>
                    <figure className="lightbox-photo-wrapper">
                        <img className="lightbox-image" src={image.src} srcSet={image.srcset} alt={image.alt} />
                        <Loading style={{ color: 'white' }} />
                    </figure>
                    <button className="lightbox-change-image">&#9654;</button>
                </section>
                <footer className="lightbox-footer">
                    <figcaption>here is a caption</figcaption>
                </footer>
            </section>
        );
    }
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
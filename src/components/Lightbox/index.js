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
        const { image, onClose, upperLeftCaption } = this.props;

        return (
            <section className="lightbox" onClick={onClose}>
                <header className="lightbox-header">
                    <span className="lightbox-which-photo">{upperLeftCaption}</span>
                    <button className="lightbox-close" autoFocus aria-label="Close">&#10005;</button>
                </header>
                <section className="lightbox-image-viewer">
                    <button className="lightbox-change-image">&#9664;</button>
                    <figure className="lightbox-photo-wrapper">
                        <Loading style={{ color: 'white' }} />
                        <img className="lightbox-image" src={image.src} srcSet={image.srcset} alt={image.alt} />
                    </figure>
                    <button className="lightbox-change-image">&#9654;</button>
                </section>
                <footer className="lightbox-footer">
                    <figcaption>{image.alt}</figcaption>
                </footer>
            </section>
        );
    }
}

Lightbox.propTypes = {
    image: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        srcset: PropTypes.string.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    upperLeftCaption: PropTypes.string.isRequired
};
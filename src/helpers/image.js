/*
 * Converts an array of objects with limited image data to one with richer data for ImageGallery component.
 * @param {array} imageSpecs - objects of image data, each needs name (string), sizes (array of widths), alt (string)
 * @param {string} imagesSubdirectory - the name of the directory within images/ that the images are located
 */
export function mapSpecsToImages(imageSpecs, imagesSubdirectory) {
    return imageSpecs.map(imageSpec => {
        const initialSrc = require(`../images/${imagesSubdirectory}/${imageSpec.name}-${imageSpec.sizes[0]}.png`);

        const srcset = imageSpec.sizes.slice(1).reduce((previousVal, currentVal) => {
            const imgSrc = require(`../images/${imagesSubdirectory}/${imageSpec.name}-${currentVal}.png`);
            return previousVal.concat(`, ${imgSrc} ${currentVal}w`);
        }, `${initialSrc} ${imageSpec.sizes[0]}w`);

        return {
            src: initialSrc,
            thumbnail: require(`../images/${imagesSubdirectory}/${imageSpec.name}-thumbnail.png`),
            thumbAlt: `Thumbnail of ${imageSpec.alt}`,
            alt: imageSpec.alt,
            srcset: srcset
        };
    });
}
import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import ImageGallery from '../../ImageGallery';

const imageSpecs = [
    {
        name: 'ccu',
        sizes: [ '320', '500', '800', '880' ],
        alt: 'Credit Card Utilization'
    },
    {
        name: 'ccu-mobile',
        sizes: [ '320', '494' ],
        alt: 'Credit Card Utilization Mobile'
    },
    {
        name: 'our-leaders',
        sizes: [ '320', '500', '800', '1020' ],
        alt: 'Our Leaders'
    },
    {
        name: 'our-leaders-mobile',
        sizes: [ '320', '500', '758' ],
        alt: 'Our Leaders Mobile'
    },
    {
        name: 'coverage',
        sizes: [ '320', '500', '800', '1024' ],
        alt: 'Auto Insurance Coverage'
    },
    {
        name: 'coverage-mobile',
        sizes: [ '320', '400' ],
        alt: 'Auto Insurance Coverage Mobile'
    },
    {
        name: 'coverage-details',
        sizes: [ '320', '500', '800', '1024' ],
        alt: 'Auto Insurance Coverage Details'
    }
];

const images = imageSpecs.map(imageSpec => {
    return {
        src: require(`../../../images/credit-karma/${imageSpec.name}-320.png`),
        thumbnail: require(`../../../images/credit-karma/${imageSpec.name}-thumbnail.png`),
        thumbAlt: `${imageSpec.alt} Thumbnail`,
        alt: imageSpec.alt
    };
});

export default function CreditKarmaPage() {
    return (
        <ContentLayout header="credit karma"
                       subheader="front end engineer, may 2015 - present"
                       links={['https://www.creditkarma.com']}>
            <p>
                generally, I'm implementing user interfaces and the front end architecture of new microservices
                that use <strong>React, Flux (Redux), and ECMAScript 6</strong>. sometimes, I collaborate with
                designers, especially as we try to determine new design paradigms for our style guide.
                lately, I've been very involved with analytics in terms of identifying data collection
                points and using front end tracking (Amplitude) to analyze users' behavior. I've also represented
                Credit Karma at local LGBT events, and as part of a focus group, we are figuring out how best to
                engage with issues of diversity and inclusion within our industry.
            </p>
            <ImageGallery images={images} />
            <p>
                more work is available upon request.
            </p>
        </ContentLayout>
    );
}

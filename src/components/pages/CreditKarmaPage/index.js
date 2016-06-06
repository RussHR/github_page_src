import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import ImageGallery from '../../ImageGallery';

const imageSpecs = [
    { name: 'ccu' },
    { name: 'ccu-mobile' },
    { name: 'our-leaders' },
    { name: 'our-leaders-mobile' },
    { name: 'coverage' },
    { name: 'coverage-mobile' },
    { name: 'coverage-details' }
];

const images = imageSpecs.map(imageSpec => {
    return {
        thumbnail: require(`../../../images/credit-karma/${imageSpec.name}-thumbnail.png`)
    };
});

export default function CreditKarmaPage() {
    console.log(images);
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

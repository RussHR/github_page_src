import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import ImageGallery from '../../ImageGallery';

import { mapSpecsToImages } from '../../../helpers/image';

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

const images = mapSpecsToImages(imageSpecs, 'credit-karma');

export default function CreditKarmaPage() {
    return (
        <ContentLayout header="credit karma"
                       subheader="front end engineer, may 2015 - september 2016"
                       links={['https://www.creditkarma.com']}>
            <div>
                at Credit Karma, I:
                <ul>
                    <li>
                        implemented user interfaces and front end architecture of new microservices that use React, Redux, and ECMAScript 6, integrating them with a legacy PHP codebase
                    </li>
                    <li>
                        created new pages for credit factors and history, allowing users to have greater insight into personal finances
                    </li>
                    <li>
                        collaborated with designers to gain mutual insight in developing a new style guide for internal use
                    </li>
                    <li>
                        identified data collection points with analysts to determine and implement user event tracking via Amplitude
                    </li>
                    <li>
                        engaged in issues of diversity and inclusion, representing Credit Karma at LGBTQ events and using research materials to discuss actionables as employees
                    </li>
                    <li>
                        refactored older JavaScript relying on jQuery and Backbone.js to improve page performance
                    </li>
                </ul>
            </div>
            <ImageGallery images={images} />
        </ContentLayout>
    );
}

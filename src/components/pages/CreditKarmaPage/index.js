import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import ImageGallery from '../../ImageGallery';

import { mapSpecsToImages } from '../../../helpers/image';

const imageSpecs = [
    {
        name: 'coverage',
        sizes: [ '320', '500', '800', '1024' ],
        alt: 'selecting the level of coverage in an auto insurance tool with a desktop browser.'
    },
    {
        name: 'coverage-mobile',
        sizes: [ '320', '400' ],
        alt: 'selecting the level of coverage in an auto insurance tool with a mobile browser.'
    },
    {
        name: 'coverage-details',
        sizes: [ '320', '500', '800', '1024' ],
        alt: 'minimum coverage details for a plan in an auto insurance tool.'
    },
    {
        name: 'ccu',
        sizes: [ '320', '500', '800', '880' ],
        alt: 'a desktop page explaining a user’s credit card utilization and how it relates to a credit score.'
    },
    {
        name: 'ccu-mobile',
        sizes: [ '320', '494' ],
        alt: 'a mobile page explaining a user’s credit card utilization and how it relates to a credit score.'
    },
    {
        name: 'our-leaders',
        sizes: [ '320', '500', '800', '1020' ],
        alt: 'the desktop version of an interactive gallery of the executives at Credit Karma.'
    },
    {
        name: 'our-leaders-mobile',
        sizes: [ '320', '500', '758' ],
        alt: 'the mobile version of an interactive gallery of the executives at Credit Karma.'
    }
];

const images = mapSpecsToImages(imageSpecs, 'credit-karma');

export default function CreditKarmaPage() {
    return (
        <ContentLayout header="credit karma"
                       subheader="front end engineer, may 2015 - september 2016"
                       links={['https://www.creditkarma.com']}>
            <section>
                at Credit Karma, I:
                <ul>
                    <li>
                        implemented user interfaces and front end architecture of <strong>new microservices that use React, Redux, and ECMAScript 6</strong>, integrating them with a legacy PHP codebase
                    </li>
                    <li>
                        created new pages for credit factors and history, <strong>allowing users to have greater insight into personal finances</strong>
                    </li>
                    <li>
                        collaborated with designers to gain mutual insight in <strong>developing a new style guide</strong> for internal use
                    </li>
                    <li>
                        <strong>identified data collection points</strong> with analysts to determine and implement user event tracking via Amplitude
                    </li>
                    <li>
                        <strong>engaged in issues of diversity and inclusion</strong>, representing Credit Karma at LGBTQ events and using research materials to discuss actionables as employees
                    </li>
                    <li>
                        refactored older JavaScript relying on jQuery and Backbone.js to <strong>improve page performance</strong>
                    </li>
                </ul>
            </section>
            <ImageGallery images={images} />
        </ContentLayout>
    );
}

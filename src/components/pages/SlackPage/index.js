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
    }
];

const images = mapSpecsToImages(imageSpecs, 'credit-karma');

export default function SlackPage() {
    return (
        <ContentLayout header="slack"
                       subheader="front end software engineer, september 2016 - present"
                       links={['https://slack.com']}>
            <div>
                at Slack, I:
                <ul>
                    <li>
                        did something
                    </li>
                    <li>
                        did something else
                    </li>
                    <li>
                        and some emails
                    </li>
                </ul>
            </div>
            <ImageGallery images={images} />
        </ContentLayout>
    );
}

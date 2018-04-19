import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import ImageGallery from '../../ImageGallery';

import { mapSpecsToImages } from '../../../helpers/image';

const imageSpecs = [
    {
        name: 'onboarding-2-start',
        sizes: [ '434' ],
        alt: 'onboarding-2-start',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-load',
        sizes: [ '434' ],
        alt: 'onboarding-2-load',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-change-task',
        sizes: [ '434' ],
        alt: 'onboarding-2-change-task',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-replay',
        sizes: [ '434' ],
        alt: 'onboarding-2-replay',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-close',
        sizes: [ '434' ],
        alt: 'onboarding-2-close',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-complete',
        sizes: [ '434' ],
        alt: 'onboarding-2-complete',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-skip-step',
        sizes: [ '434' ],
        alt: 'onboarding-2-skip-step',
        extension: 'gif'
    }
];

const images = mapSpecsToImages(imageSpecs, 'slack');

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

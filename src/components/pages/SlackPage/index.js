import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import ImageGallery from '../../ImageGallery';

import { mapSpecsToImages } from '../../../helpers/image';

const imageSpecs = [
    {
        name: 'onboarding-2-start-animated',
        sizes: [ '434' ],
        alt: 'onboarding-2-start-animated',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-load-animated',
        sizes: [ '434' ],
        alt: 'onboarding-2-load-animated',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-change-task-animated',
        sizes: [ '434' ],
        alt: 'onboarding-2-change-task-animated',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-replay-animated',
        sizes: [ '434' ],
        alt: 'onboarding-2-replay-animated',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-close-animated',
        sizes: [ '434' ],
        alt: 'onboarding-2-close-animated',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-complete-animated',
        sizes: [ '434' ],
        alt: 'onboarding-2-complete-animated',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-skip-step-animated',
        sizes: [ '434' ],
        alt: 'onboarding-2-skip-step-animated',
        extension: 'gif'
    },
    {
        name: 'email-finish-creation',
        sizes: [ '578' ],
        alt: 'email-finish-creation'
    },
    {
        name: 'email-invite',
        sizes: [ '653' ],
        alt: 'email-invite'
    },
    {
        name: 'email-invite-reminder',
        sizes: [ '677' ],
        alt: 'email-invite-reminder'
    },
    {
        name: 'email-no-account',
        sizes: [ '596' ],
        alt: 'email-no-account'
    },
    {
        name: 'email-notifications',
        sizes: [ '613' ],
        alt: 'email-notifications'
    },
    {
        name: 'email-password-logged-out',
        sizes: [ '638' ],
        alt: 'email-password-logged-out'
    },
    {
        name: 'email-set-password',
        sizes: [ '615' ],
        alt: 'email-set-password'
    },
    {
        name: 'email-team-creator-welcome',
        sizes: [ '640' ],
        alt: 'email-team-creator-welcome'
    },
    {
        name: 'email-team-joiner-welcome',
        sizes: [ '641' ],
        alt: 'email-team-joiner-welcome'
    },
    {
        name: 'email-whitelist-domain',
        sizes: [ '674' ],
        alt: 'email-whitelist-domain'
    },
    {
        name: 'email-workplace-confirmation',
        sizes: [ '599' ],
        alt: 'email-workplace-confirmation'
    },
    {
        name: 'onboarding-2-channel-replay',
        sizes: [ '640', '1264' ],
        alt: 'onboarding-2-channel-replay'
    },
    {
        name: 'onboarding-2-complete',
        sizes: [ '640', '1276' ],
        alt: 'onboarding-2-complete'
    },
    {
        name: 'onboarding-2-create-channel',
        sizes: [ '640', '1269' ],
        alt: 'onboarding-2-create-channel'
    },
    {
        name: 'onboarding-2-post-message',
        sizes: [ '640', '1267' ],
        alt: 'onboarding-2-post-message'
    },
    {
        name: 'onboarding-2-start',
        sizes: [ '640', '1287' ],
        alt: 'onboarding-2-start'
    },
    {
        name: 'onboarding-2-upload-document',
        sizes: [ '640', '1272' ],
        alt: 'onboarding-2-upload-document'
    },
    {
        name: 'quick-promo-invite-nudge',
        sizes: [ '640', '1258' ],
        alt: 'quick-promo-invite-nudge'
    },
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

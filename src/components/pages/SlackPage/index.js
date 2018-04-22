import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import ImageGallery from '../../ImageGallery';

import { mapSpecsToImages } from '../../../helpers/image';

const onboarding2Specs = [
    {
        name: 'onboarding-2-load-animated',
        sizes: [ '434' ],
        alt: 'the start of onboarding for workspace creators once the client has loaded for the first time.',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-start-animated',
        sizes: [ '434' ],
        alt: 'the team creator starting onboarding.',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-change-task-animated',
        sizes: [ '434' ],
        alt: 'the team creator changing the task in onboarding.',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-replay-animated',
        sizes: [ '434' ],
        alt: 'the team creator replaying an animation for a task in onboarding.',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-skip-step-animated',
        sizes: [ '434' ],
        alt: 'the team creator skipping a step.',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-complete-animated',
        sizes: [ '434' ],
        alt: 'the final page of onboarding appearing. onboarding is finished when all tasks are either skipped or completed.',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-close-animated',
        sizes: [ '434' ],
        alt: 'the team creator closing onboarding.',
        extension: 'gif'
    },
    {
        name: 'onboarding-2-start',
        sizes: [ '640', '1287' ],
        alt: 'the start page for onboarding.'
    },
    {
        name: 'onboarding-2-create-channel',
        sizes: [ '640', '1269' ],
        alt: 'the channel creation task for onboarding.'
    },
    {
        name: 'onboarding-2-channel-replay',
        sizes: [ '640', '1264' ],
        alt: 'the channel creation task for onboarding. here it shows that the animation has ended, and the user can replay it upon clicking.'
    },
    {
        name: 'onboarding-2-post-message',
        sizes: [ '640', '1267' ],
        alt: 'the message posting task for onboarding.'
    },
    {
        name: 'onboarding-2-upload-document',
        sizes: [ '640', '1272' ],
        alt: 'the document uploading task for onboarding.'
    },
    {
        name: 'onboarding-2-complete',
        sizes: [ '640', '1276' ],
        alt: 'the end screen for onboarding.'
    }
];

const emailSpecs = [
    {
        name: 'email-workplace-confirmation',
        sizes: [ '599' ],
        alt: 'an email with a confirmation code for creating a workspace.'
    },
    {
        name: 'email-finish-creation',
        sizes: [ '578' ],
        alt: 'an email sent to users who have started but haven’t finished creating a workspace.'
    },
    {
        name: 'email-set-password',
        sizes: [ '615' ],
        alt: 'an email letting a user know that they need to set a password to finish creating their account.'
    },
    {
        name: 'email-password-logged-out',
        sizes: [ '638' ],
        alt: 'an email letting a user know that they’ve been logged out after creating their workspace, and they need to set a password to log in.'
    },
    {
        name: 'email-invite',
        sizes: [ '653' ],
        alt: 'an email sent to a workspace invitee.'
    },
    {
        name: 'email-invite-reminder',
        sizes: [ '677' ],
        alt: 'an email reminding someone that they’ve been invited to a workspace.'
    },
    {
        name: 'email-no-account',
        sizes: [ '596' ],
        alt: 'an email someone receives if they try to sign into a workspace they don’t have an account for, but an admin has allowed them to make an account.'
    },
    {
        name: 'email-team-creator-welcome',
        sizes: [ '640' ],
        alt: 'an email welcoming a new workspace creator.'
    },
    {
        name: 'email-team-joiner-welcome',
        sizes: [ '641' ],
        alt: 'an email welcoming someone that just joined a new workspace.'
    },
    {
        name: 'email-notifications',
        sizes: [ '613' ],
        alt: 'an email letting a user know that mobile notifications have been activated.'
    },
    {
        name: 'email-whitelist-domain',
        sizes: [ '674' ],
        alt: 'an email letting an admin know that they’ve allowed people with specific email addresses to join their workspace.'
    }
];

const quickPromoSpecs = [
    {
        name: 'quick-promo-invite-nudge',
        sizes: [ '640', '1258' ],
        alt: 'a message prompting a workspace creator to invite people.'
    }
];

const onboarding2Images = mapSpecsToImages(onboarding2Specs, 'slack');
const emailImages = mapSpecsToImages(emailSpecs, 'slack');
const quickPromoImages = mapSpecsToImages(quickPromoSpecs, 'slack');

export default function SlackPage() {
    return (
        <ContentLayout header="slack"
                       subheader="front end software engineer, september 2016 - present"
                       links={['https://slack.com']}>
            <section>
                <ul>
                    <li>
                        <strong>developed the modal window</strong> for the onboarding overhaul for workspace creators
                        <ul>
                            <li>
                                57% increase in creators starting onboarding
                            </li>
                            <li>
                                24% increase in workspaces creating channels
                            </li>
                            <li>
                                10% increase in workspaces sending messages
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>created new templates</strong> for email campaigns welcoming new users
                        <ul>
                            <li>
                                0.5% increase in workspace creator activation
                            </li>
                            <li>
                                10% increase in invites sent by workspace joiners
                            </li>
                            <li>
                                3.5% increase in Slack app downloads by joiners
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>lead a cross-functional initiative</strong> to update email templates, improving visual consistency
                    </li>
                    <li>
                        drive a team-wide effort to <strong>refactor the z-indexes</strong> across Slack’s codebase, which includes over 600 declarations
                    </li>
                    <li>
                        organize biweekly meetings for front end engineers within the Lifecycle team
                    </li>
                    <li>
                        co-lead technical modernization of Slack’s invite modal window to rely on <strong>ES6/React/Redux</strong>
                    </li>
                    <li>
                        contributed to <strong>localization and internationalization</strong> by reporting and fixing internal bugs before German/French/Japanese releases
                    </li>
                    <li>
                        developed a prototype for an <strong>emoji</strong> picker, allowing users to type in hiragana, katakana, kanji, or rōmaji (Japanese ”alphabets” and Chinese characters)
                    </li>
                </ul>
            </section>

            <section className="project-description">
                <h3>Onboarding 2.0</h3>
                <p>
                Onboarding 2.0 is an overhaul of the client onboarding for workspace
                creators. Onboarding 2.0 walks the user through creating a channel, sending a
                message, and uploading a document.
                </p>
                <ImageGallery images={onboarding2Images} />
            </section>

            <section className="project-description">
                <h3>emails</h3>
                <p>
                    I worked on emails. a lot.
                </p>
                <ImageGallery images={emailImages} />
            </section>

            <section className="project-description">
                <h3>Quick Promo (Invite Nudge)</h3>
                <p>
                Quick Promo was an engineer-driven project that showed users a
                promotional message upon loading the client. it saw use as
                part of Invite Nudge, which showed users a contextual
                message to invite more people to their workspace.
                </p>
                <ImageGallery images={quickPromoImages} />
            </section>
        </ContentLayout>
    );
}

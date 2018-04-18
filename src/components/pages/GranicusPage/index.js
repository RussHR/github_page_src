import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import ImageGallery from '../../ImageGallery';

import { mapSpecsToImages } from '../../../helpers/image';

const imageSpecs = [
    {
        name: 'boards-and-commissions-application-form-pdf',
        sizes: [ '640', '1700' ],
        alt: 'boards-and-commissions-application-form-pdf'
    },
    {
        name: 'boards-and-commissions-application-form-pdf-redacted',
        sizes: [ '640', '1700' ],
        alt: 'boards-and-commissions-application-form-pdf-redacted'
    },
    {
        name: 'boards-and-commissions-board-details-pdf',
        sizes: [ '640', '1700' ],
        alt: 'boards-and-commissions-board-details-pdf'
    },
    {
        name: 'boards-and-commissions-board-roster-pdf',
        sizes: [ '640', '1700' ],
        alt: 'boards-and-commissions-board-roster-pdf'
    },
    {
        name: 'boards-and-commissions-ie-dashboard',
        sizes: [ '640', '1359' ],
        alt: 'boards-and-commissions-ie-dashboard'
    },
    {
        name: 'hippocrates-closed',
        sizes: [ '640', '794' ],
        alt: 'hippocrates-closed'
    },
    {
        name: 'hippocrates-contact',
        sizes: [ '640', '1010' ],
        alt: 'hippocrates-contact'
    },
    {
        name: 'hippocrates-help-article',
        sizes: [ '640', '996' ],
        alt: 'hippocrates-help-article'
    },
    {
        name: 'hippocrates-landing-page',
        sizes: [ '640', '1009' ],
        alt: 'hippocrates-landing-page'
    },
    {
        name: 'hippocrates-video',
        sizes: [ '640', '988' ],
        alt: 'hippocrates-video'
    },
    {
        name: 'peak-add-custom-field-filled',
        sizes: [ '640', '1362' ],
        alt: 'peak-add-custom-field-filled'
    },
    {
        name: 'peak-add-custom-field-finish',
        sizes: [ '640', '1362' ],
        alt: 'peak-add-custom-field-finish'
    },
    {
        name: 'peak-add-custom-field-preview',
        sizes: [ '640', '1362' ],
        alt: 'peak-add-custom-field-preview'
    },
    {
        name: 'peak-add-custom-field',
        sizes: [ '640', '1362' ],
        alt: 'peak-add-custom-field'
    },
    {
        name: 'peak-agenda-comment',
        sizes: [ '640', '1362' ],
        alt: 'peak-agenda-comment'
    },
    {
        name: 'peak-agenda-preview',
        sizes: [ '640', '1362' ],
        alt: 'peak-agenda-preview'
    },
    {
        name: 'peak-create-agenda-item',
        sizes: [ '640', '1362' ],
        alt: 'peak-create-agenda-item'
    },
    {
        name: 'peak-edit-comment',
        sizes: [ '640', '845' ],
        alt: 'peak-edit-comment'
    },
    {
        name: 'peak-edit-comment-finish',
        sizes: [ '640', '1362' ],
        alt: 'peak-edit-comment-finish'
    },
    {
        name: 'pharos-badges',
        sizes: [ '640', '1208' ],
        alt: 'pharos-badges'
    },
    {
        name: 'pharos-buttons',
        sizes: [ '640', '1208' ],
        alt: 'pharos-buttons'
    },
    {
        name: 'pharos-colors',
        sizes: [ '640', '1201' ],
        alt: 'pharos-colors'
    },
    {
        name: 'pharos-form-elements',
        sizes: [ '640', '1208' ],
        alt: 'pharos-form-elements'
    },
    {
        name: 'pharos-icons',
        sizes: [ '640', '1215' ],
        alt: 'pharos-icons'
    },
    {
        name: 'pharos-landing',
        sizes: [ '640', '1211' ],
        alt: 'pharos-landing'
    },
    {
        name: 'pharos-typography',
        sizes: [ '640', '1209' ],
        alt: 'pharos-typography'
    }
];

const images = mapSpecsToImages(imageSpecs, 'granicus');

export default function GranicusPage() {
    return (
        <ContentLayout header="granicus"
                       subheader="developer (front end), january 2014 - april 2015"
                       links={[ 'http://www.granicus.com' ]}>
            <div>
                at Granicus, I:
                <ul>
                    <li>
                        developed cloud-based <strong>desktop and mobile web apps</strong> that help
                        government jurisdictions manage boards/commissions and meeting agendas
                    </li>
                    <li>
                        made a <strong>user assistance modal system</strong> for new and existing products using
                        Ruby on Rails that surfaced contextual help articles and videos from the Help Center
                        and allowed webinar registration
                    </li>
                    <li>
                        utilized Mozilla’s pdf.js API to create a custom PDF document viewer for meeting
                        agendas and <strong>added PDF export functionality</strong> with wicked_pdf
                        (wkhtmltopdf) to allow governments to save and print board details and rosters
                    </li>
                    <li>
                        created a <strong>UI pattern library</strong> with Grunt to standardize the look and feel of
                        products, ensure <strong>ADA compliance</strong>, and assist other developers
                        by providing assets that can be "dropped" into their projects
                    </li>
                    <li>
                        researched D3 and chart.js to <strong>create and maintain a dashboard with donut, bar,
                        and line charts</strong> for regional demographics
                    </li>
                    <li>
                        <strong>presented a case</strong> to the product team for the pros and cons
                        of using Backbone.js as a client-side framework
                    </li>
                </ul>
            </div>
            <ImageGallery images={images} />
        </ContentLayout>
    );
}

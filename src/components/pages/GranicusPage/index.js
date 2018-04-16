import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import ImageGallery from '../../ImageGallery';
import VideoIFrame from '../../VideoIFrame';

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

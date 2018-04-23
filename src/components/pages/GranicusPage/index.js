import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import ImageGallery from '../../ImageGallery';

import { mapSpecsToImages } from '../../../helpers/image';

const peakSpecs = [
{
        name: 'peak-create-agenda-item',
        sizes: [ '640', '1362' ],
        alt: 'initial page for creating an agenda item for a governmental meeting.'
    },
    {
        name: 'peak-add-custom-field',
        sizes: [ '640', '1362' ],
        alt: 'edit mode for an agenda item for a governmental meeting.'
    },
    {
        name: 'peak-add-custom-field-preview',
        sizes: [ '640', '1362' ],
        alt: 'edit mode for an agenda item for a governmental meeting. This shows a preview of a new field to add.'
    },
    {
        name: 'peak-add-custom-field-filled',
        sizes: [ '640', '1362' ],
        alt: 'edit mode for an agenda item for a governmental meeting. This shows a preview of a new field to add with the field name and placeholder text filled in.'
    },
    {
        name: 'peak-add-custom-field-finish',
        sizes: [ '640', '1362' ],
        alt: 'an agenda item with a newly added text field for an agenda item for a governmental meeting.'
    },
    {
        name: 'peak-agenda-preview',
        sizes: [ '640', '1362' ],
        alt: 'a PDF viewer for reading agenda items and leaving comments.'
    },
    {
        name: 'peak-agenda-comment',
        sizes: [ '640', '1362' ],
        alt: 'a PDF viewer for reading agenda items and leaving comments. A comment on the PDF is currently shown.'
    },
    {
        name: 'peak-edit-comment',
        sizes: [ '640', '845' ],
        alt: 'a PDF viewer for reading agenda items and leaving comments. A comment on the PDF is being edited.'
    },
    {
        name: 'peak-edit-comment-finish',
        sizes: [ '640', '1362' ],
        alt: 'a PDF viewer for reading agenda items and leaving comments. A comment on the PDF has been newly edited.'
    }
];

const hippocratesSpecs = [
    {
        name: 'hippocrates-closed',
        sizes: [ '640', '794' ],
        alt: 'a help modal in a closed state in the lower left corner on an example page.'
    },
    {
        name: 'hippocrates-landing-page',
        sizes: [ '640', '1009' ],
        alt: 'a help modal opened to the landing page. The content is contextual based on what web page the user is on.'
    },
    {
        name: 'hippocrates-contact',
        sizes: [ '640', '1010' ],
        alt: 'a help modal opened to the contact page.'
    },
    {
        name: 'hippocrates-help-article',
        sizes: [ '640', '996' ],
        alt: 'a help modal opened to an article discussing upcoming changes for Granicus products.'
    },
    {
        name: 'hippocrates-video',
        sizes: [ '640', '988' ],
        alt: 'a help modal opened to a video.'
    }
];

const pharosSpecs = [
    {
        name: 'pharos-landing',
        sizes: [ '640', '1211' ],
        alt: 'landing page for the pattern library.'
    },
    {
        name: 'pharos-colors',
        sizes: [ '640', '1201' ],
        alt: 'colors page of the pattern library.'
    },
    {
        name: 'pharos-typography',
        sizes: [ '640', '1209' ],
        alt: 'typography page of the pattern library.'
    },
    {
        name: 'pharos-buttons',
        sizes: [ '640', '1208' ],
        alt: 'buttons page of the pattern library.'
    },
    {
        name: 'pharos-icons',
        sizes: [ '640', '1215' ],
        alt: 'icons page of the pattern library.'
    },
    {
        name: 'pharos-badges',
        sizes: [ '640', '1208' ],
        alt: 'badges page of the pattern library.'
    },
    {
        name: 'pharos-form-elements',
        sizes: [ '640', '1208' ],
        alt: 'page of the pattern library for form elements.'
    }
];

const boardsSpecs = [
    {
        name: 'boards-and-commissions-ie-dashboard',
        sizes: [ '640', '1359' ],
        alt: 'a version of a dashboard for Internet Explorer 7 that gives an overview of the board and commission details for a municipality.'
    },
    {
        name: 'boards-and-commissions-application-form-pdf',
        sizes: [ '640', '1700' ],
        alt: 'a dynamically generated PDF of an application form of a candidate for an example board or commission.'
    },
    {
        name: 'boards-and-commissions-application-form-pdf-redacted',
        sizes: [ '640', '1700' ],
        alt: 'a dynamically generated PDF of an application form of a candidate for an example board or commission, but with redacted information. The “marker” is an SVG applied over the field.'
    },
    {
        name: 'boards-and-commissions-board-details-pdf',
        sizes: [ '640', '1700' ],
        alt: 'a dynamically generated PDF of displaying the details of an example board or commission.'
    },
    {
        name: 'boards-and-commissions-board-roster-pdf',
        sizes: [ '640', '1700' ],
        alt: 'a dynamically generated PDF of displaying the roster of an example board or commission.'
    }
];

const peakImages = mapSpecsToImages(peakSpecs, 'granicus');
const hippocratesImages = mapSpecsToImages(hippocratesSpecs, 'granicus');
const pharosImages = mapSpecsToImages(pharosSpecs, 'granicus');
const boardsImages = mapSpecsToImages(boardsSpecs, 'granicus');

export default function GranicusPage() {
    return (
        <ContentLayout header="granicus"
                       subheader="developer (front end), january 2014 - april 2015"
                       links={[ 'http://www.granicus.com' ]}>
            <section>
                <ul>
                    <li>
                        developed cloud-based, <strong>responsive web apps</strong> that help
                        government jurisdictions manage boards/commissions and meeting agendas
                    </li>
                    <li>
                        made a <strong>user assistance modal window system</strong> for new and existing products using
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
                        products, ensure <strong>ADA (Americans with Disabilities Act) compliance</strong>, and assist other developers
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
            </section>

            <section className="project-description">
                <h3>Peak Agenda Management</h3>
                <p>
                Peak Agenda Management software is a cloud-based application for drafting,
                approving, and publishing agenda items for governmental meetings.
                </p>
                <ImageGallery images={peakImages} />
            </section>

            <section className="project-description">
                <h3>Hippocrates</h3>
                <p>
                Hippocrates is a help modal system embedded into other Granicus applications.
                it would populate its content contextually by oberserving the current URL.
                </p>
                <ImageGallery images={hippocratesImages} />
            </section>

            <section className="project-description">
                <h3>Pharos</h3>
                <p>
                Pharos was a new pattern library to help Granicus products be consistent
                and easy to maintain. it included “snippets” of HTML and Haml (a Ruby
                templating language) for other developers to use.
                </p>
                <ImageGallery images={pharosImages} />
            </section>

            <section className="project-description">
                <h3>Boards and Commissions</h3>
                <p>
                Boards and Commissions is an app for allowing local municipalities to manage
                the details of their boards and commissions. It also offers integration
                into their own sites via iframe to allow citizens to view current board
                rosters and openings.
                </p>
                <ImageGallery images={boardsImages} />
            </section>
        </ContentLayout>
    );
}

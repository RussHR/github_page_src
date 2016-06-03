import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import VideoIFrame from '../../VideoIFrame';

export default function GranicusPage() {
    return (
        <ContentLayout header="granicus"
                       subheader="front end developer, january 2014 - april 2015"
                       mainLink="http://www.granicus.com">
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
                        utilized Mozilla's pdf.js API to create a custom PDF document viewer for meeting
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
            <p>
                and hey, here's a thing I worked on until the company got bought and moved to Denver.
            </p>
            <VideoIFrame src="https://www.youtube.com/embed/cCutHLg4De8"
                         style={{ width:"100%", paddingBottom: `${(315/560) * 100}%` }} />
            <p>
                more work is available upon request.
            </p>
        </ContentLayout>
    );
}

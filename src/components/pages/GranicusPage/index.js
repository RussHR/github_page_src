import React from 'react';

import ContentLayout from '../../layout/ContentLayout';

export default function GranicusPage() {
    return (
        <ContentLayout header="granicus"
                       subheader="front end developer, january 2014 - april 2015"
                       mainLink="http://www.granicus.com">
            <div>
                at Granicus, I:
                <ul>
                    <li>
                        developed cloud-based desktop and mobile web apps that help government jurisdictions
                        manage boards/commissions and meeting agendas
                    </li>
                    <li>
                        developed a user assistance modal system for new and existing products using
                        Ruby on Rails that surfaced contextual help articles and videos from the Help Center
                        and allowed webinar registration
                    </li>
                    <li>
                        utilized Mozilla's pdf.js API to create a custom PDF document viewer for meeting
                        agendas and added PDF export functionality with wicked_pdf (wkhtmltopdf) to allow
                        governments to save and print board details and rosters
                    </li>
                    <li>
                        created a UI pattern library with Grunt to standardize the look and feel of
                        products, ensure ADA compliance, and assist other developers by providing assets
                        that can be "dropped" into their projects
                    </li>
                    <li>
                        researched D3 and chart.js to create and maintain a dashboard with donut, bar,
                        and line charts for regional demographics and 
                    </li>
                    <li>
                        presented a case to the product team for the pros and cons of using Backbone.js
                        as a client-side framework
                    </li>
                </ul>
            </div>
            <p>
                more work is available upon request.
            </p>
        </ContentLayout>
    );
}

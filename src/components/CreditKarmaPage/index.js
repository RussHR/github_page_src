import React from 'react';

import ContentLayout from '../ContentLayout';

export default function CreditKarmaPage() {
    return (
        <ContentLayout header="credit karma">
            <h3>
                front end engineer, may 2015 - present
            </h3>
            <p>
                <a href="https://www.creditkarma.com" target="_blank">https://www.creditkarma.com</a>
            </p>
            <p>
                generally, I'm implementing user interfaces and the front end architecture of new microservices
                that use <strong>React, Flux (Redux), and ECMAScript 6</strong>. sometimes, I collaborate with
                designers, especially as we try to determine new design paradigms for our style guide.
                lately, I've been very involved with analytics in terms of identifying data collection
                points and using front end tracking (Amplitude) to analyze users' behavior. I've also represented
                Credit Karma at local LGBT events, and as part of a focus group, we are figuring out how best to
                engage with issues of diversity and inclusion within our industry.
            </p>
            <p>
                more work is available upon request.
            </p>
        </ContentLayout>
    );
}

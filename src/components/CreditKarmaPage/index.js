import React, { Component } from 'react';

import './credit-karma-page.scss';

export default class CreditKarmaPage extends Component {
    render() {
        return (
            <div>
                <h1 className="content-header">credit karma</h1>
                <h3>
                    front end engineer, may 2015 - present
                </h3>
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
            </div>
        );
    }
}

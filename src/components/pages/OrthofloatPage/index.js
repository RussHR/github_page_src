import React from 'react';

import ContentLayout from '../../layout/ContentLayout';

import './orthofloat-page.scss';

export default function OrthofloatPage() {
    return (
        <ContentLayout header="trendtrend"
                       subheader="in progress"
                       mainLink="http://russhr.github.io/orthofloat">
            <p>
                wow three.js wow real description coming later!
            </p>
            <div className="vimeo-wrapper">
                <iframe src="https://player.vimeo.com/video/168572687"
                    className="orthofloat-video"
                    frameBorder="0"
                    webkitAllowFullScreen
                    mozallowfullscreen
                    allowFullScreen />
            </div>
        </ContentLayout>
    );
}

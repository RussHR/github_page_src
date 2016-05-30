import React from 'react';

import ContentLayout from '../../layout/ContentLayout';

export default function TrendtrendPage() {
    return (
        <ContentLayout header="trendtrend"
                       subheader="resolved - october 2015"
                       mainLink="http://russhr.github.io/trendtrend">
            <p>
                trendtrend leverages React and Flux (Redux) to use APIs from tumblr and Spotify, analyzing
                tracks and animate images to the amplitude of the sound waves.
            </p>
        </ContentLayout>
    );
}

import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import VimeoVideo from '../../VimeoVideo';

export default function TrendtrendPage() {
    return (
        <ContentLayout header="trendtrend"
                       subheader="resolved - october 2015"
                       mainLink="http://russhr.github.io/trendtrend">
            <p>
                trendtrend leverages React and Flux (Redux) to use APIs from tumblr and Spotify, analyzing
                tracks and animate images to the amplitude of the sound waves.
            </p>
            <p>
                <strong>CAUTION:</strong> the video below contains <strong>loud sounds and moving images.</strong>
            </p>
            <VimeoVideo style={{ width:"100%", paddingBottom: `${(380/640) * 100}%` }}
                        src="https://player.vimeo.com/video/168713918" />
        </ContentLayout>
    );
}

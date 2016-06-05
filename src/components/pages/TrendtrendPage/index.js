import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import VideoIFrame from '../../VideoIFrame';

export default function TrendtrendPage() {
    return (
        <ContentLayout header="trendtrend"
                       subheader="resolved - october 2015"
                       links={[ 'http://russhr.github.io/trendtrend', 'https://github.com/RussHR/trendtrend_source' ]}>
            <p>
                trendtrend leverages React and Flux (Redux) to use APIs from tumblr and Spotify, analyzing
                tracks and animating images to the amplitude of the sound waves.
            </p>
            <p>
                <strong>CAUTION:</strong> the video below contains <strong>loud sounds and moving images.</strong>
            </p>
            <VideoIFrame style={{ width:"100%", paddingBottom: `${(380/640) * 100}%` }}
                        src="https://player.vimeo.com/video/168713918" />
        </ContentLayout>
    );
}

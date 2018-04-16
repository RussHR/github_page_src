import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import VideoIFrame from '../../VideoIFrame';

export default function TrendtrendPage() {
    return (
        <ContentLayout header="trendtrend"
                       subheader="completed - october 2015"
                       links={[ 'https://github.com/RussHR/trendtrend_source' ]}>
            <p>
                trendtrend leveraged React and Redux to use APIs from tumblr and Spotify, analyzing
                tracks in order to animate images based on the amplitude of the sound waves.
                unfortunately, it is no longer functioning, likely due to an expired token.
            </p>
            <p>
                <strong>CAUTION:</strong> the video below contains <strong>loud sounds and moving images.</strong>
            </p>
            <VideoIFrame style={{ width:"100%", paddingBottom: `${(380/640) * 100}%` }}
                        src="https://player.vimeo.com/video/168713918" />
        </ContentLayout>
    );
}

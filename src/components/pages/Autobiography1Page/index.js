import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import VideoIFrame from '../../VideoIFrame';

export default function Autobiography1Page() {
    return (
        <ContentLayout header="autobiography 1"
                       subheader="resolved - august 2016"
                       links={[ 'http://russrinzler.com/autobiography-1', 'https://github.com/RussHR/autobiography-1-src' ]}>
            <p>
                autobiography 1 plays with a predominant principle of the relativity of color as highlighted
                by the late Josef Albers. the colors of the hearts are always the same, and you can
                toggle a bar in between the two to prove it.
            </p>
            <VideoIFrame style={{ width:"100%", paddingBottom: `${(666/1206) * 100}%` }}
                        src="https://player.vimeo.com/video/178854370" />
        </ContentLayout>
    );
}
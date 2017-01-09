import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import VideoIFrame from '../../VideoIFrame';

export default function HomageToBarraganPage() {
    return (
        <ContentLayout header="homage to Barrágan"
                       subheader="resolved - january 2017"
                       links={[ 'http://russrinzler.com/homage-to-barragan', 'https://github.com/RussHR/homage-to-barragan-1-src' ]}>
            <p>
                homage to barragán is simply that: an homage to late architect <a href="https://en.wikipedia.org/wiki/Luis_Barrag%C3%A1n" target="_blank">Luis Barragán</a>.
            </p>
            <VideoIFrame style={{ width:"100%", paddingBottom: `${(666/1206) * 100}%` }}
                        src="https://player.vimeo.com/video/178854370" />
        </ContentLayout>
    );
}
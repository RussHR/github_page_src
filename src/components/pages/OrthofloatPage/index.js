import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import VideoIFrame from '../../VideoIFrame';

export default function OrthofloatPage() {
    return (
        <ContentLayout header="orthofloat"
                       subheader="in progress"
                       links={[ 'http://russrinzler.com/orthofloat', 'https://github.com/RussHR/orthofloat_src' ]}>
            <p>
                orthofloat marks a foray into WebGL with three.js.
                currently, you can actively make the cubes a random color.
            </p>
            <VideoIFrame style={{ width:"100%", paddingBottom: `${(417/640) * 100}%` }}
                        src="https://player.vimeo.com/video/168572687" />
        </ContentLayout>
    );
}

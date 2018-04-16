import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import VideoIFrame from '../../VideoIFrame';

export default function OrthofloatPage() {
    return (
        <ContentLayout header="orthofloat"
                       subheader="completed - july 2016"
                       links={[
                            'http://russrinzler.com/orthofloat',
                            'https://github.com/RussHR/orthofloat_src',
                            'https://www.npmjs.com/package/orthofloat'
                        ]}
        >
            <p>
                orthofloat marks a foray into WebGL with three.js.
                you can change the colors and rotate the camera.
            </p>
            <VideoIFrame style={{ width:"100%", paddingBottom: `${(670/1226) * 100}%` }}
                        src="https://player.vimeo.com/video/176560218" />
        </ContentLayout>
    );
}
import React from 'react';

import ContentLayout from '../../layout/ContentLayout';
import VideoIFrame from '../../VideoIFrame';

export default function HomageToBarraganPage() {
    return (
        <ContentLayout header="color interactions"
                       subheader="completed - march 2017"
                       links={[ 'http://russrinzler.com/color-interactions', 'https://github.com/RussHR/color_interactions' ]}>
            <p>
                color interactions is a set of online exercises designed after assignments
                and plates in <a href="https://en.wikipedia.org/wiki/Josef_Albers"
                target="_blank">Josef Albers’s</a> <em>Interaction of Color</em>.
            </p>
            <VideoIFrame style={{ width:"100%", paddingBottom: `${(1528/2660) * 100}%` }}
                        src="https://player.vimeo.com/video/265949169" />
        </ContentLayout>
    );
}
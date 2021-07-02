import React from 'react';
import { Grid } from '@material-ui/core';

const MemberSection = ({
    brainImage,
    brainTitle
}) => {
    return (
        <div>
            <div className={'team_brain'}>
                {brainImage}
            </div>
            <div className={'team_title'}>
                <h4>{brainTitle}</h4>
            </div>
        </div>
    )
}

export default MemberSection;

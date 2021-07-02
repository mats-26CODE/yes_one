import React from 'react';
import { Grid } from '@material-ui/core';
import './DesignPrinciple.css';

const DesignPrinciple = ({ 
    toolIcon,
    principleHeading,
    principleIntro,
}) => {
    return (
        <div className={'principle_box'}>
            <div>
                {toolIcon}
            </div>
            <div>
                <h4>{principleHeading}</h4>
                <p>{principleIntro}</p>
            </div>
        </div>
    )
};

export default DesignPrinciple;

import React from 'react';
import { Grid } from '@material-ui/core';

const ClientSection = ({
    icon
}) => {
    return (
        <div className={'client_box'}>
            {icon}
        </div>
    )
}

export default ClientSection;

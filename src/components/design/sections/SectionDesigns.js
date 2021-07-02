import React from 'react';
import { Grid } from '@material-ui/core';

const SectionDesigns = ({

}) => {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <div className={'design_arts_box'}>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <div className={'design_arts_box_two'}>
                    <div>
                        
                    </div>
                    <h4> <span style={{fontSize: '4rem'}}>😎</span></h4>
                    <h4> <span style={{fontSize: '4rem'}}>🪄</span></h4>
                </div>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <div className={'design_arts_box_three'}>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
            </Grid>
        </Grid>
    )
};

export default SectionDesigns;

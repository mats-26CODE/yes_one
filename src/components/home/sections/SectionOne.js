import React from 'react';
import { Grid } from '@material-ui/core';

//-> component imports

const SectionOne = ({
    noteCalloutRight,
    team,
    heading,
    intro,
    button,
    artClassName
}) => {
    return (
        <div className={'section_box'}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className={artClassName}>
                        {noteCalloutRight ? 
                            <div className={'note_right'}>
                                {noteCalloutRight}
                            </div> : null
                        }

                        {team ? 
                            <div className={'section_team_box'}>
                                {team}
                            </div> : null 
                        }
                    </div>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className={'section_intro_box'}>
                        <h4>{heading}</h4>
                        <p>{intro}</p>
                        {button}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default SectionOne;

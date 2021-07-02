import React from 'react';
import { Grid } from '@material-ui/core';
import './css/Development.css';

//-> component imports
import Section from './sections/Section';
import NoteCalloutLeft from '../usual/NoteCalloutLeft';
import NoteCalloutRight from '../usual/NoteCalloutRight';
import CircleArt from '../usual/CircleArt';
import CircleArtLeft from '../usual/CircleArtLeft';
import Button from '../usual/Button';

const Development = () => {
    return (
        <div className={'development_container'}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className={'dev_header_box'}>
                        <h4>Development <span id={'slash'}>/</span></h4>
                    </div>

                    <div className={'dev_intro'}>
                        <h5>
                            From planning, analysis, design, implementation, testing & integration to maintenance, 
                            We engineer operable, transitional and maintanable solutions. Our team of developers work hand in hand to 
                            make sure the product at handhas the best code, functional features and the best user experience. 
                        </h5>
                    </div>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className={'dev_art_box'}>

                    </div>
                </Grid>
            </Grid>

            <div className={'development_section'}>
                <Section 
                    introLeft={true}
                    artwork={true}
                    headingPresent={true}
                    heading={'Planning & Analysis'}
                    intro={'In order to execute, we identify the idea, practically make assesment of the idea, and plan on how we will execute the idea to perfection. We gather requirements and make a thorough analysis of what the software will do.'}
                    noteCalloutLeftOne={<NoteCalloutLeft top={true} slash={' < / > '} />}
                    noteCalloutLeftTwo={<NoteCalloutLeft top={false} slash={' < / > '}/>}
                />
            </div>

            <div className={'development_section'}>
                <Section 
                    introLeft={false}
                    artwork={true}
                    headingPresent={true}
                    heading={'Design & Implementation'}
                    intro={'We have the best UI / UX designers, our software products are engaging, easy to navigate through, offer the best user experience and eye catching. Our aproach has always been in making sure we finalize projects on time by implementing working functionalities correctly and efficiently. '}
                    noteCalloutRightOne={<NoteCalloutRight top={true} slash={' < / > '} />}
                    noteCalloutRightTwo={<NoteCalloutRight top={false} slash={' < / > '}/>}
                />
            </div>

            <div className={'development_test_support'}>
                <div className={'dev_curve'}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div className={'dev_art_box_curve'}>

                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={'development_section'}>
                    <Section
                        introLeft={true}
                        artwork={false}
                        headingPresent={true}
                        heading={'Testing & Deploying'}
                        intro={'Our testing engineers perform testing throughout the entire development process, we will test the product’s interaction,  functionalities. We are committed to making sure that every thing works perfectly and ready for deployment.  '}
                        circleArtwork= {<CircleArt circleRight={true} />}
                        circleArtworkTwo= {<CircleArt circleRight={false} />}
                    />
                </div>
            
                <div className={'development_section'}>
                    <Section
                        introLeft={false}
                        artwork={false}
                        headingPresent={true}
                        heading={'Maintenance & Support'}
                        intro={'We help maintain, support and keep track of the performance of the software for you, making sure its running at its peak, no need to worry, we got your back.'}
                        circleArtwork= {<CircleArtLeft circleRight={true} />}
                        circleArtworkTwo= {<CircleArtLeft circleRight={false} />}
                    />
                </div>

                <div className={'development_section'}>
                    <div className={'contact'}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div>
                                    <h4>Want a custom software and or a design ? </h4>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div>
                                    <Button 
                                        text={'Get in touch'}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Development;

import React from 'react';
import { IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5';
import { CgFacebook } from "react-icons/cg";
import { Grid } from '@material-ui/core';
import './Footer.css';


const Footer = () => {
    return (
        <footer>
            <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div className={'footer_intro'}>
                        <h4>Develop with us. Design with us</h4>
                    </div>
                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div className={'footer_social_box'}>
                        <div><IoLogoTwitter size='1.3em' color='#828282' /></div>
                        <div><CgFacebook size='1.3em' color='#828282' /></div>
                        <div><IoLogoInstagram size='1.3em' color='#828282' /></div>
                    </div>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className={'footer_copyright'}>
                        <h5>© Copyright 2021, Yes Productions</h5>
                    </div>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;

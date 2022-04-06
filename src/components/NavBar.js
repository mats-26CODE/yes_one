import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import {Typography } from '@material-ui/core';

//-> component imports
import Button from './usual/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      zIndex: 1000,
    },
    app_bar: {
      backgroundColor: 'rgba(23, 23, 25, 0.98)',
      height: '10vh',
      position: 'fixed',
      top: 0,
    },
    toolBar: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    navLink: {
      fontSize: '1rem',
      textDecoration: 'none',
      fontFamily: 'NunitoRegular, sans-serif',
      margin: '1rem',
      color: '#c5c5c5',
      '&:hover': {
        color: '#F5A623',
        cursor: 'pointer',
        transition: 'all .5s',
        webkitTransition: 'all .5s',
        textDecoration: 'none',
      },
      '&:active': {
        color: '#F5A623',
      }
    },
    linksBox: {
      display: 'flex',
      alignItems: 'center',
    },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app_bar}>
        <Toolbar className={classes.toolBar}>
          <div >
            <Typography variant="h6" component={Link} to="/" className={classes.navLink} >
                YesPro Logo
            </Typography>
          </div>

          <div className={classes.linksBox}>
            <Typography variant="h6" className={classes.navLink} component={Link} to="/development">
              Development
            </Typography>

            <Typography variant="h6" className={classes.navLink} component={Link} to="/design">
              Design
            </Typography>

            <Typography variant="h6" className={classes.navLink} component={Link} to="/team">
              Team 
            </Typography>

            <Typography variant="h6" className={classes.navLink} component={Link} to="/careers">
              Careers
            </Typography>

            <div>
                <Button
                  text={'Get in touch'}
                />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
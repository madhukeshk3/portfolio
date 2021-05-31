import {
  Grid,
  Button,
  IconButton,
  Avatar,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import Logo from './Logo';
import { myData } from '../data';

const useStyles = makeStyles({
  intro__hello: {
    '& h3': {
      'font-size': '3rem',
      fontWeight: '900',
    },
    '& p': {
      'font-size': '1.8rem',
      fontWeight: 'bold',
      color: 'rgb(112, 112, 112)',
      overflowWrap: 'break-word',
      marginTop: '20px',
      width: '80%',
    },

    'font-size': '12px',
  },
  intro__image: {
    marginLeft: '5%',
    marginTop: '20px',
  },
  intro__button: {
    marginTop: '20px',
    marginRight: '10px',
    display: 'flex',
  },
  intro__links: {
    marginTop: '20px',
    paddingRight: '10px',
  },
});
function Intro() {
  const classes = useStyles();
  return (
    <Grid container style={{ Color: 'black', margin: '80px 0 0 0' }}>
      <Grid item sm={12} md={6}>
        <div className={classes.intro__hello}>
          <h3>
            {' '}
            <span> Hello </span> 👋
          </h3>
          <p>
            {' '}
            I'm {myData.username} and I am a Final year CSE student at NIT
            Jamshedpur!{' '}
          </p>
        </div>

        <div className={classes.intro__button}>
          <div style={{ padding: '0 10px 0 0' }}>
            <a href="#contact">
              <Button size="large" variant="contained" color="primary">
                Hire me
              </Button>
            </a>
          </div>
          <div style={{ padding: '0 0 0 10px' }}>
            <a href={myData.resume_link}>
              <Button size="large" variant="contained" color="primary">
                View CV
              </Button>
            </a>
          </div>
        </div>
        <div className={classes.intro__links}>
          <Logo />
        </div>
      </Grid>
      <Grid item sm={12} md={6}>
        <div className={classes.intro__image}>
          <img
            style={{ height: '65%', width: '65%', objectFit: 'fill' }}
            src={myData.myPhoto_url}
            alt=" "
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default Intro;

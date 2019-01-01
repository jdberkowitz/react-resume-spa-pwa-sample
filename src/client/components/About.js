import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MyAvatar from './images/me.jpg';

const styles = theme => ({
  paperContainer: {
    padding: '10px 0 10px 10px',
    margin:  '20px 0'
  },
  fixWidth: {
    minWidth: 120
  },
  avatarProfile: {
    width: 125,
    height: 125,
    margin: '1em 0'
  },
  mobileAlignRight: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'right'
    }
  },
  mobileAlignLeft: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'left'
    }
  }
});

function About(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Paper className={classes.paperContainer}>
            <Grid container spacing={16} direction="column">
              <Grid item xs={12} sm={12} md={12} lg={12} align="center">
                <Avatar
                  src={MyAvatar}
                  className={classes.avatarProfile}
                  alt="Joshua D Berkowitz Resume"
                />
              </Grid>
            </Grid>
            <Grid container spacing={16} direction="row">
              <Grid item xs={4} sm={4} md={12} lg={12} className={classes.fixWidth}>
                <Typography variant="body1" className={classes.mobileAlignRight}>
                  <strong>Full Name:</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={8} md={12} lg={12}>
                <Typography variant="body1" className={classes.mobileAlignLeft}>
                  Joshua David Berkowitz
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={16} direction="row">
              <Grid item xs={4} sm={4} md={12} lg={12} className={classes.fixWidth}>
                <Typography variant="body1" className={classes.mobileAlignRight}>
                  <strong>Location:</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={8} md={12} lg={12}>
                <Typography variant="body1" className={classes.mobileAlignLeft}>
                  Holland, PA
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={16} direction="row">
              <Grid item xs={4} sm={4} md={12} lg={12} className={classes.fixWidth}>
                <Typography variant="body1" className={classes.mobileAlignRight}>
                  <strong>Website:</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={8} md={12} lg={12}>
                <Typography variant="body1" className={classes.mobileAlignLeft}>
                 joshuaberkowitz.us
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={16} direction="row">
              <Grid item xs={4} sm={4} md={12} lg={12} className={classes.fixWidth}>
                <Typography variant="body1" className={classes.mobileAlignRight}>
                  <strong>Email:</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={8} md={12} lg={12}>
                <Typography variant="body1" className={classes.mobileAlignLeft}>
                  info@joshuaberkowitz.us
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm={12} md={8} lg={8}>
          <Paper className={classes.paperContainer}>
            <Typography variant="title" align="left" style={{ margin: '10px 0' }}>
              Early Years
            </Typography>
            <Divider />
            <Typography variant="body1" align="left" style={{ margin: '10px 0' }}>
              Born outside Philadelphia Pennsylvainia, I started out life in a quiet and
            </Typography>
          </Paper>
          <Paper className={classes.paperContainer}>
            <Typography variant="title" align="left" style={{ margin: '10px 0' }}>
              Education
            </Typography>
            <Divider />
            <Typography variant="body1" align="left" style={{ margin: '10px 0' }}>
              Attending university
            </Typography>
          </Paper>
          <Paper className={classes.paperContainer}>
            <Typography variant="title" align="left" style={{ margin: '10px 0' }}>
              Early Career
            </Typography>
            <Divider />
            <Typography variant="body1" align="left" style={{ margin: '10px 0' }}>
              Started my own company
            </Typography>
          </Paper>
          <Paper className={classes.paperContainer}>
            <Typography variant="title" align="left" style={{ margin: '10px 0' }}>
              Miami
            </Typography>
            <Divider />
            <Typography variant="body1" align="left" style={{ margin: '10px 0' }}>
              Started my own company
            </Typography>
          </Paper>
          <Paper className={classes.paperContainer}>
            <Typography variant="title" align="left" style={{ margin: '10px 0' }}>
              Today
            </Typography>
            <Divider />
            <Typography variant="body1" align="left" style={{ margin: '10px 0' }}>
              Started my own company
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withStyles(styles)(About);

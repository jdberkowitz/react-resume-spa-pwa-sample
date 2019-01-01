import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  },
  paperTwo: {
    minWidth: 320,
    marginTop: theme.spacing.unit * 4,
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20
  },
  titleText: {
    paddingLeft: 10,
    paddingRight: 10
  },
  paperPara: {
    padding: 5
  }
});

const cards = [1, 2, 3, 4, 5];

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              className={classes.titleText}
              variant="title"
              align="center"
              color="textSecondary"
              paragraph
            >
              Leverage established and emerging technology to deliver innovative solutions for the
              global market.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    My Mission
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <Grid container spacing={16} justify="space-evenly">
          <Grid item key={1} sm={12} md={4} lg={4}>
            <Paper elevation={1} className={classes.paperTwo}>
              <Typography variant="headline" component="h3" align="left">
                Professional.
                <Divider />
              </Typography>
              <Typography variant="body1" component="p" align="left" className={classes.paperPara}>
                In my professional life I strive to always improve my skills and my knowledge of
                digital services and methods. My thrist for knowledge is continually satisfied by
                the ever increasing complexity of the digital landscape. My interests are primarily
                in code architecture development, machine learning and applications of artificial
                intelligence to life sciences.
              </Typography>
              <Typography variant="body1" component="p" align="left" className={classes.paperPara}>
                It is essential to be surrounded my smart and motivated peers. In my professional
                career I have had the pleasure to work with many bright and motivated individuals,
                in the future I expect to work with an ever younger workforce which will not only
                allow me to gain new perspectives but help in educating the next generation of
                professionals.
              </Typography>
            </Paper>
          </Grid>
          <Grid item key={2} sm={12} md={4} lg={4}>
            <Paper elevation={1} className={classes.paperTwo}>
              <Typography variant="headline" component="h3" align="left">
                Personal.
                <Divider />
              </Typography>
              <Typography variant="body1" component="p" align="left" className={classes.paperPara}>
                In today's rapid paced global workplace a separation between work and personal life
                is as important as ever. I enjoy 15 and 20 hour crunches as many developers do but
                if the workload leads to early burnout then neither will benefit from all the hard
                work. I also enjoy the dynamic and sharing that occurs at the office. This collaboration 
                often leads to innovative new approaches to the problems in front of us.
              </Typography>
              <Typography variant="body1" component="p" align="left" className={classes.paperPara}>
                Personally I love to embrace my hobbies which include video production and editing,
                graphic design, 3D parametric modeling, photography, chemistry and astrophysics.
                Through these areas I have learned and honed skills essential for my flexibility as a
                professional. I regularly utilize my hobbies in my day to day business allowing me
                to merge my love for all things digital.

              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);

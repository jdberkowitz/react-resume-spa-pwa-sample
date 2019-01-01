import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import WorkColor from './images/work.png';
import SkillsColor from './images/skills.png';
import MissionColor from './images/mission.png';
import EducationColor from './images/education.png';
import AboutColor from './images/about.png';

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: '#e9e9e9ab', // theme.palette.background.paper,
    borderRadius: 5
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroIntro: {
    padding: 15
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
  }
});

// Create the data for the cards on the home page
// @param title String
// @param description String
// @param link String | use relative path ie. "/about"
// @return Object
class CardData {
  constructor(title, description, link, image) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.image = image;
  }
}

const aboutCard = new CardData(
  'About me.',
  'Get to know a little about my personal and professional history. ',
  '/about',
  AboutColor
);
const missionCard = new CardData(
  'Professional Mission',
  'Learn what drives me professionaly. I pride myself on my ambition and determinination.',
  '/mission',
  MissionColor
);
const skillsCard = new CardData(
  'Skills',
  'My self assesed skills in software and programming languages as well as other useful business tools.',
  '/skills',
  SkillsColor
);
const educationCard = new CardData(
  'Education',
  'A little more history about my acedemic education of the past and my plans for the future.',
  '/education',
  EducationColor
);
const experianceCard = new CardData(
  'Work History',
  'Our experiances shape our future. Learn more about my professional work experiance.',
  '/experiance',
  WorkColor
);

const cardArray = [missionCard, skillsCard, educationCard, experianceCard];

function Home(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              Welcome.
            </Typography>
            <div className={classes.heroIntro}>
              <Typography variant="title" align="center" color="textSecondary" paragraph>
                My resume app contains a more complete picture of my accomplishments and showcases
                this quick React app I built for you.
              </Typography>
            </div>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Call Me
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Email Me
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cardArray.map(card => (
              <Grid item key={cardArray.indexOf(card)} sm={12} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image} // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography align="left" gutterBottom variant="headline" component="h2">
                      {card.title}
                    </Typography>
                    <Typography align="left">{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <NavLink to={card.link}>
                      <Button size="large" color="primary" variant="outlined">
                        Learn more...
                      </Button>
                    </NavLink>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 320
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 25
  },
  topMargin: {
    lineHeight: 2
  }
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          how we define skill.
        </Typography>
        <Typography variant="headline" component="h2">
          skill
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <small>noun</small>
        </Typography>
        <Typography component="p">
          the ability to use one's knowledge effectively and readily in execution or performance
          <br />
          {' '}
          {bull}
          {' '}
          <br />
          <span className={classes.topMargin}>
            {'"Josh has skills in programming as well as many areas of business administration"'}
          </span>
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://www.merriam-webster.com/dictionary/skill" target="self">
          {' '}
          <Button size="small">Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);

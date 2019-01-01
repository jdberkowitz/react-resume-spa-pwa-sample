import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  card: {
    maxWidth: 400,
    textAlign: 'left',
    marginBottom: 25,
    float: 'left'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class EducationCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card} align="left">
        <CardHeader
          avatar={(
            <Avatar
              aria-label={this.props.schoolName}
              className={classes.avatar}
              src={this.props.image}
            />
)}
          title={this.props.schoolName}
          subheader={this.props.degreeSubheading}
        />
        <CardMedia
          className={classes.media}
          image={this.props.cover}
          title={`${this.props.schoolName} ${this.props.degreeSubheading}`}
        />
        <CardContent>
          <Typography component="p">{this.props.preText}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body2">
              {this.props.descriptionText}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

EducationCard.propTypes = {
  classes: PropTypes.object.isRequired,
  degreeSubheading: PropTypes.string.isRequired,
  preText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
  schoolName: PropTypes.string.isRequired
};

export default withStyles(styles)(EducationCard);

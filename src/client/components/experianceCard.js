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
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import CheckCircle from '@material-ui/icons/CheckCircleOutlineTwoTone';
import DateIcon from '@material-ui/icons/DateRange';

const styles = theme => ({
  card: {
    minWidth: 300,
    minHeight: 300,
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
  },
  avatarRed400: {
    backgroundColor: red[400]
  },
  avatarRed300: {
    backgroundColor: red[300]
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
        <CardHeader title={this.props.employerName} subheader={this.props.employerSubheading} />

        <CardContent>
          <Typography component="p">{this.props.preText}</Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <DateIcon />
          <Typography component="title">{this.props.employedDate}</Typography>
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
            {this.props.icons.map(skill => (
              <Chip
                color="secondary"
                avatar={(
                  <Avatar>
                    <CheckCircle />
                  </Avatar>
)}
                variant="outlined"
                label={skill}
                style={{ margin: `${5}px` }}
              />
            ))}
            <Divider style={{ marginBottom: `${1.5}em`, marginTop: `${1.5}em` }} />
            <Typography paragraph variant="body2">
              {this.props.descriptionText}
            </Typography>
            <Typography variant="body2">
              <br />
              <ul>
                <li>{this.props.bullet1}</li>
                <li>{this.props.bullet2}</li>
                <li>{this.props.bullet3}</li>
                <li>{this.props.bullet4}</li>
                <li>{this.props.bullet5}</li>
              </ul>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

EducationCard.propTypes = {
  classes: PropTypes.object.isRequired,
  employerSubheading: PropTypes.string.isRequired,
  preText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
  employerName: PropTypes.string.isRequired
};

export default withStyles(styles)(EducationCard);

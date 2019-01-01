import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import MyAvatar from './images/me.jpg';
import sendGrid from '@sendgrid/mail';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  avatarProfile: {
    width: 125,
    height: 125
  },
  textField2: {
    width: '97%'
  },
  paperContainer: {
    padding: '10px 0 10px 10px',
    margin: '20px 0'
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
  },
  rightIcon: {
    marginLeft: 15
  }
});




class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      emailAddress: '',
      message: '',
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  };

  handleClick(){
    sendGrid.setApiKey('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');
    const emailMsg = {
      to: 'info@joshuaberkowitz.us',
      from: 'website@joshuaberkowitz.us',
      subject: 'Website Contact',
      text: this.state.fullName + '  ' + this.state.emailAddress + '   ' + this.state.message
    };
    sendGrid.send(emailMsg);
  };  
render(){
  const { classes } = this.props;
  return (
    <React.Fragment>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={12} md={3} lg={3} />
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid item xs={12} sm={12} md={3} lg={12}>
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
                  <strong>Website:</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={8} md={12} lg={12}>
                <Typography variant="body1" className={classes.mobileAlignLeft}>
                  https://joshuaberkowitz.us
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={16} direction="row">
              <Grid item xs={4} sm={4} md={12} lg={12} className={classes.fixWidth}>
                <Typography variant="body1" className={classes.mobileAlignRight}>
                  <strong>Phone:</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={8} md={12} lg={12}>
                <Typography variant="body1" className={classes.mobileAlignLeft}>
                  (954) 314-2630
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
          </Grid>

        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} />
      </Grid>
    </React.Fragment>
  );
}}

export default withStyles(styles)(Contact);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ArrowIcon from '@material-ui/icons/ArrowBackIosRounded';
import MailIcon from '@material-ui/icons/Mail';
import ShareIcon from '@material-ui/icons/Share';
import ProfileIcon from '@material-ui/icons/PersonOutlineOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';

const styles = {
  root: {
    minWidth: 350,
    position: 'sticky',
    bottom: 0,
    zIndex: 1
  }
};

class LabelBottomNavigation extends Component {
  state = {
    value: 'other'
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <a href="https://www.linkedin.com/in/jdberkowitz/">
          <BottomNavigationAction
            showLabel
            label="LinkedIn"
            value="linkedIn"
            icon={<ProfileIcon />}
          />
        </a>
        <a href="tel:9543142630">
          <BottomNavigationAction showLabel label="Call" value="call" icon={<PhoneIcon />} />
        </a>
        <a href="mailto:info@joshuaberkowitz.us">
          <BottomNavigationAction showLabel label="Email  " value="email" icon={<MailIcon />} />
        </a>
        <a href="https://joshuaberkowitz.us">
          <BottomNavigationAction showLabel label="Share" value="share" icon={<LanguageIcon />} />
        </a>
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LabelBottomNavigation);

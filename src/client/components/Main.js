import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import SocialMediaIcons from 'react-social-media-icons';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './Data';
import HomePage from './HomePage';
import Mission from './Mission';
import Skills from './Skills';
import Experiance from './Experiance';
import Education from './Education';
import About from './About';
import Papers from './Papers';
import References from './References';
import Contact from './Contact';

const drawerWidth = 280;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  appBar: {
    position: 'fixed',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'appBarShift-left': {
    marginLeft: drawerWidth
  },
  'appBarShift-right': {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  'content-left': {
    marginLeft: -drawerWidth
  },
  'content-right': {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'contentShift-left': {
    marginLeft: 0
  },
  'contentShift-right': {
    marginRight: 0
  },
  socialIcons: {
    display: 'flex',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    marginRight: 20
  },
  pageHeaderTitle: {
    width: '88%',
    textAlign: 'left'
  }
});

class Main extends Component {
  state = {
    open: false,
    anchor: 'left'
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
    window.scrollTo(0,0);
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleClickAway = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <ClickAwayListener onClickAway={this.handleClickAway}>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List onClick={this.handleDrawerClose}>{mailFolderListItems}</List>
          <Divider />
          <List onClick={this.handleDrawerClose}>{otherMailFolderListItems}</List>
        </Drawer>
      </ClickAwayListener>
    );

    const before = drawer;
    const after = null;
    const windowLocation = window.location.href;
    
    function pageTitle(windowLocation) {
      const pageTitle = windowLocation.split('/').pop();
      return pageTitle;
    }

    function titleCase(str) {
      str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
      }
      return str.join(' ');
    }

    

    const socialMediaIcons = [{
      url: 'https://github.com/jdberkowitz',
      className: 'fa-github'
      },
      {
      url: 'https://www.linkedin.com/in/jdberkowitz/',
      className: 'fa-linkedin'},
      ];

    return (
      <HashRouter>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-${anchor}`]]: open
              })}
            >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  onChange={this.iconTitle}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className={classes.pageHeaderTitle} noWrap>
                  {titleCase(pageTitle(windowLocation))}
                </Typography>
                <div className={classes.socialIcons}>
                  <SocialMediaIcons
                    icons={socialMediaIcons}
                    iconSize={'1.7em'}
                    iconColor={'#FFFFFF'}
                    align={'right'}
                  />
              </div>
              </Toolbar>
            </AppBar>

            {before}
            <main
              className={classNames(classes.content, classes[`content-${anchor}`], {
                [classes.contentShift]: open,
                [classes[`contentShift-${anchor}`]]: open
              })}
            >
              <div className={classes.drawerHeader} />
              <Route exact path="/" component={HomePage} />
              <Route path="/mission" component={Mission} />
              <Route path="/skills" component={Skills} />
              <Route path="/experiance" component={Experiance} />
              <Route path="/education" component={Education} />
              
              <Route path="/contact" component={Contact} />
              <Route path="/papers" component={Papers} />
              <Route path="/references" component={References} />
            </main>
            {after}
          </div>
        </div>
      </HashRouter>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);

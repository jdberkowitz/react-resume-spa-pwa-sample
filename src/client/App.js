import React, { Component } from 'react';

import './app.css';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import Main from './components/Main';
import Footer from './components/FooterMenu';

OfflinePluginRuntime.install();

export default class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Divider />
        {/* Footer */}
        <footer className="footer">
          <Typography variant="title" align="center" gutterBottom>
            JDB Design
          </Typography>
          <Typography variant="subheading" align="center" color="textSecondary" component="p">
            MIT License - Github
            {' '}
            <br />
            This project will be published on GitHub. Inquire for source.
          </Typography>
        </footer>
        {/* End footer */}
        <Footer />
      </div>
    );
  }
}

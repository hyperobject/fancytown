import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


import MenuIcon from 'material-ui-icons/Menu';
import './App.css';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function App(props) {
    const { classes } = props
    return (
      <div className="App">
        <Reboot />
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

export default withStyles(styles)(App);

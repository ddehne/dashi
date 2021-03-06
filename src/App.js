import React, { Component } from 'react';
import Dashboard from './components/Dashboard'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});


class App extends Component {
  
  render() {
    const { classes } = this.props;

    return (
      <Dashboard />
    );
  }
}

export default withStyles(styles)(App);

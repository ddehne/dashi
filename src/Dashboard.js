import React, { Component } from 'react';
import Tile from './Tile'
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


class Dashboard extends Component {
  
  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.root} container spacing={24}>
        <Grid item xs={12}>
          <Tile />
        </Grid>

        <Grid item xs={6}>
          <Tile />
        </Grid>
        
        <Grid item xs={6}>
          <Tile />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Dashboard);

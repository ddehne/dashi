import React, { Component } from 'react';
import WeatherTile from './WeatherTile';
import ForecastTile from './ForecastTile';
import NewsTile from './NewsTile';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import './Dashboard.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1200,
    padding: theme.spacing.unit * 2,
    margin: 'auto'
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
          <NewsTile />
        </Grid>

        <Grid item xs={6}>
          <WeatherTile />
        </Grid>
        
        <Grid item xs={6}>
          <ForecastTile />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Dashboard);

import React, { Component } from 'react';
import './WeatherTile.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

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

class WeatherTile extends Component {

    constructor(props) {
        super(props);
        this.state = { };
        this.loadWeatherData = this.loadWeatherData.bind(this);
      }

    componentDidMount() {
        this.loadWeatherData();
    }

    loadWeatherData() {
        let self = this;
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&units=imperial&APPID=11111')
        .then(function (response) {
            console.log(response);
            self.setState({weatherData: response.data})
        })
        .catch(function (error) {
            console.log(error);
        });

        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Minneapolis&units=imperial&APPID=11111')
        .then(function (response) {
            console.log(response);
            self.setState({forecastData: response.data})
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    renderWeatherData() {
        return (
            <Grid container spacing={16}>
            <Grid item>
              <img src={"http://openweathermap.org/img/w/"+this.state.weatherData.weather[0].icon + ".png"} />
            </Grid>
            <Grid item>
                <Typography variant="headline">{this.state.weatherData.main.temp + "℉"}</Typography>
              </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {this.state.weatherData.name + " now"}
                  </Typography>
                  <Typography gutterBottom>{this.state.weatherData.weather[0].main}</Typography>
                  <Typography color="textSecondary">{this.state.weatherData.weather[0].description}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          )
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                {this.state.weatherData ? this.renderWeatherData() : "loading weather..."}       
            </Paper>)
    }
}

export default withStyles(styles)(WeatherTile);
import React, { Component } from 'react';
import './ForecastTile.css';
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

class ForecastTile extends Component {

    constructor(props) {
        super(props);
        this.state = { };
        this.loadForecastData = this.loadForecastData.bind(this);
      }

    componentDidMount() {
        this.loadForecastData();
    }

    loadForecastData() {
        let self = this;
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Minneapolis&units=imperial&APPID=11111')
        .then(function (response) {
            console.log(response);
            self.setState({forecastData: response.data})
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    renderForecastData() {
        return (
          <Grid xs={12} spacing={16}>
            <Grid container>
              <Grid xs={1} item>
                <img src={"http://openweathermap.org/img/w/"+this.state.forecastData.list[0].weather[0].icon + ".png"} />
              </Grid>
              <Grid xs={3} item>
                  <Typography variant="headline">{this.state.forecastData.list[0].main.temp + "℉"}</Typography>
                </Grid>
              <Grid xs={4} item container>
                <Grid item xs container direction="column" spacing={16}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {new Date(this.state.forecastData.list[0].dt_txt).toDateString()} {new Date(this.state.forecastData.list[0].dt_txt).getHours()}:00
                    </Typography>
                    <Typography color="textSecondary">{this.state.forecastData.list[0].weather[0].main}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={1} item>
                <img src={"http://openweathermap.org/img/w/"+this.state.forecastData.list[1].weather[0].icon + ".png"} />
              </Grid>
              <Grid xs={3} item>
                  <Typography variant="headline">{this.state.forecastData.list[1].main.temp + "℉"}</Typography>
                </Grid>
              <Grid xs={4} item container>
                <Grid item xs container direction="column" spacing={16}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {new Date(this.state.forecastData.list[1].dt_txt).toDateString()} {new Date(this.state.forecastData.list[1].dt_txt).getHours()}:00
                    </Typography>
                    <Typography color="textSecondary">{this.state.forecastData.list[1].weather[0].main}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={1} item>
                <img src={"http://openweathermap.org/img/w/"+this.state.forecastData.list[2].weather[0].icon + ".png"} />
              </Grid>
              <Grid xs={3} item>
                  <Typography variant="headline">{this.state.forecastData.list[2].main.temp + "℉"}</Typography>
                </Grid>
              <Grid xs={4} item container>
                <Grid item xs container direction="column" spacing={16}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {new Date(this.state.forecastData.list[2].dt_txt).toDateString()} {new Date(this.state.forecastData.list[2].dt_txt).getHours()}:00
                    </Typography>
                    <Typography color="textSecondary">{this.state.forecastData.list[2].weather[0].main}</Typography>
                  </Grid>
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
                {this.state.forecastData ? this.renderForecastData() : "loading forecast..."}       
            </Paper>)
    }
}

export default withStyles(styles)(ForecastTile);
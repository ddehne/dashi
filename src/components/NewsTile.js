import React, { Component } from 'react';
import './NewsTile.css';
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

class NewsTile extends Component {

    constructor(props) {
        super(props);
        this.state = { };
        this.loadNewsData = this.loadNewsData.bind(this);
      }

    componentDidMount() {
        this.loadNewsData();
    }

    loadNewsData() {
        let self = this;
        axios.get('https://newsapi.org/v2/top-headlines?sources=associated-press&apiKey=11111')
        .then(function (response) {
            console.log(response);
            self.setState({newsData: response.data})
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    renderNewsData() {
      const { classes } = this.props;
        return (
          <Grid container spacing={16}>
            <Grid spacing={16} item>
              <img className={classes.image} src={this.state.newsData.articles[0].urlToImage } />
            </Grid>
            <Grid item>
                <Typography variant="headline">{this.state.newsData.articles[0].title}</Typography>
                <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {this.state.newsData.articles[0].source.name}
                  </Typography>
                  <Typography gutterBottom>{this.state.newsData.articles[0].description}</Typography>
                  <Typography color="textSecondary"><a href={this.state.newsData.articles[0].url}>Read More...</a></Typography>
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
                {this.state.newsData ? this.renderNewsData() : "loading news..."}       
            </Paper>)
    }
}

export default withStyles(styles)(NewsTile);
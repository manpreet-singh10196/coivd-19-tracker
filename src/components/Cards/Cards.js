import React from 'react';
import classes from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import CountUp from 'react-countup';

const cards = ( props ) => {
 
  if( !props.data.confirmed ) {
    return 'Loading...';
  }

return (
 <div className={classes.container}>
    <Grid container spacing={3} justify="center">

      <Grid item xs={12} md={3} component={Card} className={ cx(classes.card, classes.infected) } >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
           Infected
        </Typography>
        <Typography variant="h5" component="h2">
          <CountUp start={0} end={props.data.confirmed.value} duration={2.75} separator="," />
        </Typography>
        <Typography color="textSecondary">
          { new Date(props.data.lastUpdate).toDateString() }
        </Typography>
        <Typography variant="body2" component="p">
          Number Of Active Cases of Covid19
        </Typography>
      </CardContent>
      </Grid>
    
    
     <Grid item xs={12} md={3} component={Card}  className={ cx(classes.card, classes.recovered) } >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
             Recovered
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp 
                start={0} 
                end={props.data.recovered.value}
                duration={3}
                separator="," />
        </Typography>
        <Typography color="textSecondary">
        { new Date(props.data.lastUpdate).toDateString() }
        </Typography>
        <Typography variant="body2" component="p">
          Number Of Recover Cases of Covid19
        </Typography>
      </CardContent>
     </Grid>

      <Grid item xs={12} md={3} component={Card}  className={ cx(classes.card, classes.deaths) } >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
            Deaths
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp 
                start={0} 
                end={props.data.deaths.value}
                duration={3}
                separator="," />
        </Typography>
        <Typography color="textSecondary">
        { new Date(props.data.lastUpdate).toDateString() }
        </Typography>
        <Typography variant="body2" component="p">
          Number Of Death Cases of Covid19
        </Typography>
      </CardContent>
      </Grid>


    </Grid>    


</div>

    );
}

export default cards;
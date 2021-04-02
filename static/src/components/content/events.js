import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {eventData} from '../data/eventsData.js'

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    maxHeight:700,
    fontSize: 50,
    height: '500px',
    width: '500px',
    backgroundColor: 'rgba(65,233,117,1)',
    border: '2px solid black !important',
    marginBottom: '50px',
marginRight: '75px'
  },
  fontSize: {
    fontSize: '30px',
  },
  headerSize: {
    fontSize: '40px',
  }
});

export default function Events(props) {
  const classes = useStyles();
 


  return (
    <Fragment>
      {eventData.map(event => (
        <Card className={classes.root} key={event.id}>
      <CardActionArea>
     
        <CardContent>
          <Typography className={classes.headerSize} gutterBottom variant="h5" component="h1"  fontSize="h1.fontSize">
           {event.name}
          </Typography>
          <Typography className={classes.fontSize} variant="body2" color="textSecondary" component="h1" fontSize="h1.fontSize">
          {event.date}
          </Typography>
          <Typography className={classes.fontSize} variant="body2" color="textSecondary" component="h2" fontSize="h1.fontSize">
          {event.lineUp}
          </Typography>
          <Typography className={classes.fontSize} variant="body2" color="texttextSecondary" component="h2" fontSize="h1.fontSize">
          {event.address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      ))}
    </Fragment>
    
  );
}
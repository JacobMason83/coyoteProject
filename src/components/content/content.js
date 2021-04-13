import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {data} from '../data/dummyData'

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    maxHeight:700,
    height: '100%',
    width: '500px',
    marginBottom: 15,
    border: '2px solid black !important',
    webkitBoxShadow: '#FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, -1px 1px 10px 11px rgba(0,0,0,0.98)',
boxShadow: '#FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, -1px 1px 10px 11px rgba(0,0,0,0.98)',

  },
  media: {
    height: 140,
  },
  fontSize: {
    fontSize: '22px',
  },
  headerSize: {
    fontSize: '40px',
  }
});

export default function Content(props) {
  const classes = useStyles();
  const newData = data

  return (
    <Fragment>

    {newData.map(item => (
      <Card className={classes.root} key={item.id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.headerSize} gutterBottom variant="h5" component="h2">
            Coyote Grove 
          </Typography>
          <Typography className={classes.fontSize} gutterBottom variant="body2"  component="p">
          {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    ))}
   
    </Fragment>
  );
}
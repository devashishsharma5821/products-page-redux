import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import classes from './Card.module.css'

// const useStyles = makeStyles({
//   root: {
//     backgroundColor : 'red'    
//   }
// });

// function imageStyled () {
//   const classes = useStyles();
//   return classes
// }

export default function Cardz(props) {


  return (
    <Card sx={{ maxWidth: 805, mx:'auto', my: 6, maxHeight: 550 }}>
      <CardActionArea  >
        <div className={classes.container}>
        <img
        src={props.image}
        srcSet={props.image}
        alt={props.title}
      />
      </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign='center' >
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <Typography variant="body2" color="text.primary" textAlign='center' fontWeight='bold' sx={{fontSize:28}} >
            ${props.price}
          </Typography>
          <Typography variant="body2" color="text.primary" textAlign='center' fontWeight='bold'  >
           Rating:{props.rating}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



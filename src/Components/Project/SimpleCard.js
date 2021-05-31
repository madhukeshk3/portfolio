import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles({
  card__repo:{
    height:"150px",
    '&:hover': {
      backgroundColor:'rgb(255, 240, 235)',
    }
  }
});

export default function SimpleCard({repo}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <a href={repo.repo_url} style={{textDecoration:'none',}}>
    <Card className={classes.card__repo} >
        <CardContent >
          <Typography variant="h5" component="h2" >
            {repo.name}
          </Typography>
          
          <Typography variant="body2" component="p">
            {repo.description}
          </Typography>
          <div style={{display:'flex',}}>
            <div>
              <span style={{fontSize:'1rem'}}>
              {repo.stars}
            </span>
            </div>
            <div >
            <Icon style={{fontSize:'20px'}}><StarIcon/> </Icon> 
            </div>
          
          </div>
          
          

        </CardContent>

      </Card>
    </a>
    
  );
}
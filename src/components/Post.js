import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles={
  card:{
    display: "flex",
    marginBottom: 20
  },
  image:{
    minWidth: 200,
    objectFit: 'cover'
  },
  content:{
    padding: 10
  }
}
class Post extends Component{
  render(){
    const {classes, post: {userImage, user, createdAt, title, commentCount, likeCount}} =this.props;
    return(
      <Card className={classes.card}>
        <CardMedia image={userImage} title="Profile Image" className={classes.image}/>
        <CardContent>
          <Typography variant="h4" color="secondary" component={Link} to="/user/:userId">{user}</Typography>  
          <Typography variant="body1" color="textSecondary">Posted At {createdAt.substring(0,10)}</Typography>  
          <Typography variant="body1" className={classes.content}>{title}</Typography>  
        </CardContent>
              
      </Card>
          
    )
  }
}

export default withStyles(styles)(Post);

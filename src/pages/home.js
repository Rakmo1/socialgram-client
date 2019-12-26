import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Post from '../components/Post'

class Home extends Component{
  state={
    posts: null
  }
  componentDidMount(){
    axios.get('/getPosts')
    .then(res=>{
      this.setState({
        posts: res.data
      });
      // console.log(res.data);
      // this.props.history.push('/');
    })
    .catch(err=>{
      console.log(err);
    })
  }
  render(){
    let displayPosts= this.state.posts? 
      this.state.posts.map((post)=> <Post post={post} key={post.postId}/>)
    : <p>Loading...</p>; 
    return(
      <div>
        <Grid container spacing={5} >
          <Grid item sm={8} xs={12}>
            {displayPosts}
          </Grid>
          <Grid item sm={4} xs={12}>
            <p>Profile...</p>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Home;

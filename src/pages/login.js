import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//Mui stuff
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const styles=(theme)=>({
  ...theme.spread
});
class Login extends Component{
  constructor(){
    super();
    this.state={
      email: '',
      password: '',
      loading: false,
      errors: {},
    }
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({
      loading: true
    });
    let userData={
      email : this.state.email,
      password : this.state.password
    }
    axios.post('/login',userData)
    .then(res=>{
      let token = res.data.message;
      this.setState({
        loading: false 
      });
      localStorage.setItem('Fbtoken',`Bearer ${token}`);
      this.props.history.push('/');
    })
    .catch(err=>{
      this.setState({
        errors: err.response.data,
        loading: false
      });
    })
  }
  render(){
    const {classes} =this.props;
    return(
      <Grid container>
        <Grid item sm/> 
        <Grid item sm >
          
          <form noValidate onSubmit={this.handleSubmit} className={classes.form}>
            <img src="../images.jfif" width="80px" className={classes.image} alt="logo"/>
            <TextField fullWidth color="secondary" className={classes.textfield} error={this.state.errors.email?true:false} onChange={this.handleChange} type="email" label="Email" name="email" variant="outlined" helperText={this.state.errors.email}/>
            <TextField fullWidth color="secondary" className={classes.textfield} error={this.state.errors.password?true:false} onChange={this.handleChange} type="password" label="Password" name="password" variant="outlined" helperText={this.state.errors.password}/>
            {this.state.errors.general && 
            (<Typography variant="body2" className={classes.customError}>{this.state.errors.general}</Typography>)}
            <br/>
            <Button color="primary" variant="contained" type="submit" className={classes.button} disabled={this.state.loading}>Login</Button>
            {this.state.loading?<CircularProgress size={30} className={classes.circular}></CircularProgress>:null}
            <small className={classes.bottomsignup}>Dont have a account? Signup <Link to='/signup'>here</Link></small>
            
          </form>
        </Grid> 
        <Grid item sm/> 

      </Grid>
    );
  }
}
Login.propTypes={
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Login);

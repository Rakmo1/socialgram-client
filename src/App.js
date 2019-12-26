import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home.js'
import Login from './pages/login.js'
import Signup from './pages/signup.js'
import Navbar from './components/Navbar'
import jwtDecode from 'jwt-decode';
import AuthRoute from './util/AuthRoute'
//MUI STUFF
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette:{
    primary: {
      light: '#dc004e',
      main: '#dc004e',
      dark: '#dc004e',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6333',
      main: '#2196f3',
      dark: '#b22a00',
      contrastText: '#fff'
    }
  },
  spread:{

    form:{
      display: 'flex',
      flexDirection: 'column',
      // textAlign: 'center'
    },
    textfield: {
      margin: '10px auto',
      // width: '100%'
    },
    button:{
      margin: '10px auto 10px auto',
      // display: 'block',
      // backgroundColor: 'red',
      // color: 'primary',
    },
    image:{
      margin: '0 auto 0 auto',
      // display: 'block'
    },
    customError:{
      color: 'red'
    },
    circular:{
      // display: 'block',
      margin: '0 auto 0 auto'
    },
    bottomsignup:{
      margin: '0 0 0 auto',
      // display: 'block'
    }
  }
});
let authenticated=false;
const token=localStorage.Fbtoken;
if(token){
  let decodedToken=jwtDecode(token);
  console.log(decodedToken);
  if(decodedToken.exp*1000 < Date.now()){
    window.location.href='/login';
    authenticated=false;
  }
  else{
    authenticated=true;
  }
}

class App extends Component{
    render(){
        return(
          <MuiThemeProvider theme={theme}>
            <div className="app">
              <Router>
                <Navbar/>
                <div className="container">
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <AuthRoute exact path="/login" component={Login} authenticated={authenticated}/>
                    <AuthRoute exact path="/signup" component={Signup} authenticated={authenticated}/>
                  </Switch>      
                  
                </div>
              </Router>      
            </div>
          </MuiThemeProvider>
          
        )
    }
}

export default App;

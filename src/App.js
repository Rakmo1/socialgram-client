import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home.js'
import Login from './pages/login.js'
import Signup from './pages/signup.js'
import Navbar from './components/Navbar'

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
  }
});
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
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                  </Switch>      
                  
                </div>
              </Router>      
            </div>
          </MuiThemeProvider>
          
        )
    }
}

export default App;

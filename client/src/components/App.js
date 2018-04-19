import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import Cards from './Cards';
import MyCards from './MyCards';
import Home from './Home';
import background from '../assets/img/background.png';
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Background>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/cards' component={Cards} />
            <Route exact path='/my_cards' component={MyCards} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </Background>
    );
  }
}
const Background = styled.div`
  background: url(${background}) no-repeat center fixed;
  background-size: cover;
  padding: 0;
  height: 100vh;
`

export default App;

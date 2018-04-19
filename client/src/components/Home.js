import React from 'react'
import {Header, Button, Segment, Container, Image, Grid, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import background from '../assets/img/background.png';
import Pokeball from './Pokeball';
import styled from 'styled-components';

const Home = () => (
  <Background>
    <Splash verticalAlign='middle' centered>
      <Grid.Row>
        <Grid.Column>
          <Link to='/cards'>
            <Pokeball />
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Splash>
  </Background>
)

const Background = styled.div `
  background: url(${background}) no-repeat center fixed;
  background-size: cover;
  padding: 0;
  height: 100vh;
`

const Splash = styled(Grid)`
  height: 100% !important;
`

export default Home;

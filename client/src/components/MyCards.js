import React from 'react';
import {connect} from 'react-redux'
import {getCards, deleteCard} from '../actions/myCards';
import styled from 'styled-components';
import background from '../assets/img/background.png';
import {Card, Image, Grid, Container, Header, Button} from 'semantic-ui-react';

class MyCards extends React.Component{

  componentDidMount(){
    const {dispatch} = this.props
    dispatch(getCards())
  }

  removeCard = (id) => {
    const {dispatch} = this.props
    dispatch(deleteCard(id))
  }

  render(){
    const {cards} = this.props
    return(
      <Background>
        <Splash verticalAlign='middle' centered>
          <Grid.Row centered>
            <Grid.Column textAlign='center'>
              <Header>My Cards</Header>
              <Card.Group>
                {console.log(cards)}
                {cards.map( data => {
                  const {card} = data
                  return(
                    <Card key={data.id}>
                      <Image src={card.imageUrl} />
                      <Button
                        onClick={() => this.removeCard(data.id)}
                      >
                      Remove
                      </Button>
                    </Card>
                  )
                })}
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Splash >
      </Background>
    )
  }
}
const Background = styled.div`
  background: url(${background}) no-repeat center fixed;
  background-size: cover;
  padding: 0;
  height: 100vh;
`
const Splash = styled(Grid) `
  height: 100% !important;
`

const mapStateToProps = (state) => {
  return {
    cards: state.myCards
  }
}

export default connect(mapStateToProps)(MyCards)
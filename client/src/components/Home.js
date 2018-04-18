import React, { Component } from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import axios from 'axios'

class Home extends Component {
  state = {cards: [], myCards: []}

  // componentDidMount(){
  //   axios.get('/api/cards')
  //     .then(res => {
  //       this.setState({cards: res.data})
  //     })
  // }

  addCard = (card) => {
    debugger
    const {myCards} = this.state
    const {newDeck} = [...myCards, card]
    this.setState({myCards: newDeck})
  }


  showCard = (card) => {
    return(
      <Card key={card.id}>
        <Image src={card.imageUrl} />
        <Button 
          circular 
          icon='plus'
          onClick={() => this.addCard(card)}
        ></Button>
      </Card>
    )
  }

  render(){
    const {cards} = this.state
    return(
      <Card.Group>
        {/* {cards.map( card => 
            this.showCard(card)
        )} */}
      </Card.Group>
    )
  }
}

export default Home;

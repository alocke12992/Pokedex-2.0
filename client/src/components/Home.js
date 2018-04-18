import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import axios from 'axios'

class Home extends Component {
  state = {cards: []}

  componentDidMount(){
    axios.get('/api/cards')
      .then(res => {
        this.setState({cards: res.data})
      })
  }


  showCard = (card) => {
    return(
      <Card key={card.id}>
        <Image src={card.imageUrl} />
        <Card.Header>
          {card.name}
        </Card.Header>
        <Card.Meta>
          {card.supertype} - {card.subtype}
        </Card.Meta>
        <Card.Description>
        </Card.Description>
      </Card>
    )
  }

  render(){
    const {cards} = this.state
    return(
      <Card.Group>
        {cards.map( card => 
            this.showCard(card)
        )}
      </Card.Group>
    )
  }
}

export default Home;

import React, {Fragment} from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setFlash} from '../actions/flash';
// import SearchBar from './SearchBar';
import {
  Button,
  Card,
  Container,
  Dimmer,
  Header,
  Item,
  Loader,
  Segment,
  Image,
  Grid,
  Form,
} from 'semantic-ui-react';

class Cards extends React.Component {
  state = {cards: [], searchResults: [], myCards: [], searchTerm: '', toggleQuery: false, loading: true}

  componentDidMount() {
    const {dispatch} = this.props;
    axios.get('/api/cards')
      .then(res => {
        this.setState({cards: res.data})
      })
      .catch(err => {
        dispatch(setFlash('Unable to retrieve cards. Please try again', 'red'))
      })
      .then(() => {
        this.setState({loading: false});
      });
  }

  loadingMessage = () => {
    return (
      <Dimmer active style={{height: '100vh'}}>
        {/* 
        Commented Out until I can figure out how to get this to run
        <div className="wrapper">
          <div id='loader'>
            <div id="top"></div>
            <div id="center"></div>
            <div id="bottom"></div>
          </div>
        </div> */}
        <Loader size='massive'>Loading</Loader>
      </Dimmer>
    );
  }

  searchBar = () => {
    const {searchTerm} = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='searchTerm'
          value={searchTerm}
          placeholder='e.g. Bulbasaur'
          label='Search the basic deck'
          onChange={this.handleChange}
        />
      </Form>
    )
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault
    this.searchCards()
    this.setState({ searchTerm: '', toggleQuery: true})
  }

  searchCards = () => {
    const {cards, searchTerm, searchResults } = this.state
    let results = [] 
    let term = searchTerm.toLowerCase()
    if (term === 'all'){
      this.setState({ searchResults: cards})
    } else {
      cards.map((card) => {
        card.name.toLowerCase().includes(searchTerm.toLowerCase()) ?
          results.push(card)
        : 
          null 
      })
      this.setState({searchResults: results})
    }
  }

  displayCards = () => {
    const {searchResults} = this.state;
    return searchResults.map((result, i) => {
      return (
        <Card key={i}>
          <Image src={result.imageUrl} />
          <Button
            circular
            onClick={() => this.addCard(result)}
          >
            Add
          </Button>
        </Card>
      );
    });
  }

  noResults = () => {
    return(
      <Header>No Cards Found</Header>
    )
  }

  addCard = (card) => {
  
    const {myCards} = this.state
    const newDeck = [...myCards, card]
    this.setState({myCards: newDeck})
  }

  render() {
    const {loading, searchResults, toggleQuery} = this.state;
    if (loading) {
      return (
        <Container>
          {this.loadingMessage()}
        </Container>
      )
    } else {
      return (
        <Grid centered>
          <Grid.Row centered>
            <Grid.Column width={10}>
            {this.searchBar()}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={14}>
              {searchResults.length === 0 && toggleQuery === true ?
                this.noResults()
              :
                <Fragment>
                  <Header as='h1' textAlign='center' inverted>Results</Header>
                  <Container style={{height: '100vh', overflowY: 'scroll', overflowX: 'hidden'}}>
                    <InfiniteScroll
                      useWindow={false}
                    >
                      <Card.Group stackable itemsPerRow={3}>
                        {this.displayCards()}
                      </Card.Group>
                    </InfiniteScroll>
                  </Container>
                </Fragment>
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
  }

}

export default connect()(Cards);

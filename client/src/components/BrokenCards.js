import React, {Fragment} from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setFlash} from '../actions/flash';
import {addCard} from '../actions/myCards';
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
  state = {cards: [], searchResults: [], myCards: [], searchTerm: '', toggleQuery: false, loading: true, page: 1, hasMore: true, totalPages: 20}
// THIS HAS THE INFIINIATE SCROLLER IN IT

  componentDidMount() {
    this.fetchCards()
  }

  componentWillReceiveProps(nextProps) {

    this.setState({cards: [], loading: true, hasMore: true});
    this.fetchCards(nextProps, 1);
  }

  fetchCards = (props) => {
    const {dispatch} = this.props;
    const {totalPages, page} = this.state
    axios.get(`/api/cards?page=${page}&perPage=20`)
      .then(res => {
        const {data} = res;
        if (totalPages) {
          if (totalPages === page)
            this.setState({hasMore: false});
          this.setState({cards: [...this.state.cards, ...data.data], page})
        } else {
          this.setState({cards: data.data, hasMore: false})
        }
      })
      .catch(err => {
        dispatch(setFlash('Unable to retrieve cards. Please try again', 'red'))
      })
      .then(() => {
        this.setState({loading: false});
      });
  }


  loadMoreCards = () => {
    console.log(this.state.hasMore)
    debugger
    const {page} = this.state
    this.setState({page: page + 1})
    this.fetchCards(this.props)
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
    return (
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
    this.setState({searchTerm: '', toggleQuery: true})
  }

  searchCards = () => {
    const {cards, searchTerm, searchResults} = this.state
    let results = []
    let term = searchTerm.toLowerCase()
    if (term === 'all') {
      this.setState({searchResults: cards})
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
            onClick={() => this.getCard(result)}
          >
            Add
          </Button>
        </Card>
      );
    });
  }

  noResults = () => {
    return (
      <Header>No Cards Found</Header>
    )
  }

  getCard = (card) => {
    // const {myCards} = this.state
    // const newDeck = [...myCards, card]
    // this.setState({myCards: newDeck})
    const {dispatch} = this.props
    dispatch(addCard(card))
  }

  render() {
    const {loading, searchResults, toggleQuery, page, totalPages} = this.state;
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
                  <Segment>
                    <Container style={{height: '250px', overflowY: 'scroll', overflowX: 'hidden'}}>
                      <InfiniteScroll
                        useWindow={false}
                        pageStart={page}
                        loadMore={this.loadMoreCards}
                        hasMore={page < totalPages}
                        initialLoad={false}
                      >
                        <Card.Group stackable itemsPerRow={3}>
                          {this.displayCards()}
                        </Card.Group>
                      </InfiniteScroll>
                    </Container>
                  </Segment>
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

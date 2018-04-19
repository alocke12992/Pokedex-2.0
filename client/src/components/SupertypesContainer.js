import React from 'react'
import {Image} from 'semantic-ui-react';
import {getSupertypes} from '../actions/types';
import {connect} from 'react-redux';
import TypeList from './TypeList';

class SupertypesContainer extends React.Component {
  componentDidMount(){
    const {dispatch} = this.props
    dispatch(getSupertypes())
  }

  handleTypeSelect = pokemonType => {
    this.props.history.push(`/supertypes/${pokemonType.toLowerCase()}/cards`);
  };

  render() {
    const { superTypes } = this.props
    return (
      <TypeList
        types={superTypes}
        onTypeSelect={this.handleTypeSelect}
      />
        )
      }
    }
    
const mapStateToProps = state => {
  return {
    superTypes: state.superTypes
        }
      };
      
export default connect()(SupertypesContainer)
import React, { Component } from 'react';
import dummyData from './dummy-data';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import SearchBar from './components/SearchBar/SearchBarTemplate';
import PostContainer from './components/PostContainer/PostContainerTemplate';

export default
class App extends Component {
  state = {
    dummyData,
    search: ''
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  searchPosts = event => {
    event.preventDefault()

    this.setState(prevState => {
      return {
        dummyData: this.state.dummyData.filter(data => data.username == this.state.search),
        search: ''
      }
    })
  }

  render() {
    return (
      <div
        style = { pageContainer }
      >
        <SearchBar 
          handleChange = { this.handleChange }
          searchPosts = { this.searchPosts }
          search = { this.state.search }
        />
        {this.state.dummyData.map(data => (
          <PostContainer 
            data = { data } 
            likes = { data.likes }
            key = { uuid.v4() }
          />
        ))}
      </div>
    );
  }
}

App.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object).isRequired
}

const pageContainer = {
  width: '600px',
  margin: '10px'
}
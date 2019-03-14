import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBarTemplate';
import PostContainer from './components/PostContainer/PostContainerTemplate';

export default
class App extends Component {
  state = {
    dummyData,
  }

  render() { console.log(this.state.dummyData)
    return (
      <div
        style = { pageContainer }
      >
        <SearchBar />
        { this.state.dummyData.map(data => (
          <PostContainer 
            data = { data }
            key = { uuid.v4() }
          />
        )) }
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
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import dummyData from '../../dummy-data';
import uuid from 'uuid';
import SearchBar from '../SearchBar/SearchBarTemplate';
import PostContainer from './PostContainerTemplate';

const PageContainer = styled.div`
  width: 600px;
  margin: 10px;
`;

export default class PostsPage extends Component {
  state = {
    dummyData,
    search: '',
    username: ''
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

  componentDidMount() {
    const username = localStorage.getItem('username')
    this.setState({ dummyData: dummyData, username: username })
    localStorage.removeItem('username')
  }

  render() {
    return (
      <PageContainer>
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
            username = { this.state.username }
          />
        ))}
      </PageContainer>
    );
  }
}
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 0 10px;
`;

const Left = styled.div`
  display: flex;
  font-size: 1.5rem;
`;

const InstagramLogo = styled.img`
  height: 25px;
  margin-left: 10px;
`;

const Middle = styled.div`
  width: 25%;
  position: relative;
  height: 30px;
  margin-top: 5px;
  margin-right: 5%;
`;

const Search = styled.input`
  text-align: center;
  padding-left: 13px;
  width: 100%;
`;

const Submit = styled.input`
  position: absolute;
  left: -9999px
`;

const Icon = styled.i``;

const SearchIcon = styled(Icon)`
  position: absolute;
  left: calc(50% - 13px);
  font-size: 0.5rem;
  top: 7px;
  color: gray;
`;

const Form = styled.form``;

const IconSmall = styled.div`
  width: 12%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  opacity: 0.8;
`;

export default class SearchBarTemplate extends Component {
  render() {
    return (
      <NavContainer>
        <Left>
          <i 
            class="fab fa-instagram"
          ></i>&nbsp;
          <InstagramLogo 
            src = { require('./views/ig_search_bar.png') }
            alt = "instagram"
          />
        </Left>
        <Middle>
          <SearchIcon
            className="fas fa-search"
          ></SearchIcon>
          <Form 
            onSubmit = { this.props.searchPosts }
          >
            <Search 
              type="text"
              name="search"
              onChange={ this.props.handleChange }
              value={ this.props.search }
              placeholder='Search'
            />
            <Submit
              type="submit"
            />
          </Form>
        </Middle>
        <IconSmall>
          <Icon 
            className="far fa-compass"
          ></Icon>
          <Icon 
            className="far fa-heart"
          ></Icon>
          <Icon 
            className="far fa-user"
          ></Icon>
        </IconSmall>
      </NavContainer>
    )
  }
}

import React, { Component } from 'react';

export default class SearchBarTemplate extends Component {
  render() {
    return (
      <div style = { navContainer }>
        <div style = { left }>
          <i 
            class="fab fa-instagram"
          ></i>&nbsp;
          <div style = {{ verticalLine }}></div>
          <img 
            src = { require('./views/ig_search_bar.png') }
            alt = "instagram"
            style = { img }
          />
        </div>
        <div style = { middle }>
          <i 
            class="fas fa-search"
            style = { searchIcon }
          ></i>
          <form onSubmit = { this.props.searchPosts }>
            <input 
              type="text"
              name="search"
              onChange={ this.props.handleChange }
              value={ this.props.search }
              placeholder='Search' 
              style = { search }
            />
            <input 
              type="submit"
              style = {{
                position: 'absolute',
                left: '-9999px'
              }}
            />
          </form>
        </div>
        <div
          style = { iconSmall }
        >
          <i class="far fa-compass"></i>
          <i class="far fa-heart"></i>
          <i class="far fa-user"></i>
        </div>
      </div>
    )
  }
}

const navContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  height: '50px',
  alignItems: 'center',
  borderBottom: '1px solid lightgray',
  padding: '0 10px'
}

const left = {
  display: 'flex',
  fontSize: '1.5rem'
}

const verticalLine = {
  border: '6px solid green',
  width: '5px',
  height: '50px'
}

const img = {
  height: '25px',
  marginLeft: '10px'
}

const middle = {
  width: '25%',
  position: 'relative',
  height: '30px',
  marginTop: '5px',
  marginRight: '5%'
}

const search = {
  textAlign: 'center',
  paddingLeft: '13px',
  width: '100%',
}

const searchIcon = {
  position: 'absolute',
  left: 'calc(50% - 13px)',
  fontSize: '0.5rem',
  top: '7px',
  color: 'gray'
}

const iconSmall = {
  width: '12%',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1rem',
  opacity: '0.8'
}

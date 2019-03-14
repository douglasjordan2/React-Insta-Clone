import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PostContainerTemplate extends Component {
  render() {
    const { username, thumbnailUrl, imageUrl, likes, timestamp, comments, } = this.props.data
    return (
      <div style = { container }>
        <div style = { userInfo }>
          <img 
            src = { thumbnailUrl } 
            alt="thumbnail"
            style = { thumbnail }
          />
          { username }
        </div>
        <img 
          src = { imageUrl } 
          alt="image"
        />
        <div style = { icons }>
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
        </div>
        <span style = { likesStyle }>{ likes } likes</span>
        { comments.map(comment => (
          <div style = {{ marginBottom: '5px', paddingLeft: '10px' }}>{ comment.username }&nbsp;<span style = { commentStyle }>{ comment.text }</span></div>
        )) }
      </div>
    )
  }
}

PostContainerTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

const container = {
  display: 'flex',
  flexDirection: 'column',
  fontWeight: 'bold',
  border: '1px solid gray',
  borderRadius: '5px',
  margin: '25px 0'
}

const userInfo = {
  display: 'flex',
  alignItems: 'center',
  padding: '15px'
}

const thumbnail = {
  height: '40px',
  borderRadius: '50%',
  marginRight: '10px'
}

const icons = {
  fontSize: '2rem',
  padding: '10px',
  width: '14%',
  display: 'flex',
  justifyContent: 'space-between'
}

const likesStyle = {
  fontSize: '1.2rem',
  padding: '0 0 10px 10px'
}

const commentStyle = {
  fontWeight: 'normal',
  padding: '0'
}
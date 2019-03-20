import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSectionTemplate';

export default class PostContainerTemplate extends Component {
  state = {
    data: this.props.data,
    likes: this.props.likes,
    like: false
  }

  componentDidMount() {
    this.setState({ data: this.props.data, likes: this.props.likes })
  }

  likeStyle = liked => {
    return({
      color: liked ? 'red' : 'black',
      cursor: 'pointer',
    })
  }

  likePost = () => {
    this.setState({ like: !this.state.like })

    return this.addLikes()
  }

  addLikes = () => {
    this.setState({ likes: this.state.like ? this.state.likes -= 1 : this.state.likes += 1 })
  }

  render() { console.log(this.props)
    const { username, thumbnailUrl, imageUrl } = this.state.data
    return (
      <div style = {{
        border: '1px solid lightgray',
        borderRadius: '4px',
        padding: '5px',
        marginBottom: '10px'
      }}>
        <div style = {{
          display: 'flex',
          alignItems: 'center',
        }}>
          <img 
            src={ thumbnailUrl } 
            alt="thumbnail"
            style = {{
              borderRadius: '50%',
              width: '10%',
              margin: '10px 20px'
            }}
          />
          <span style = {{
            fontWeight: 'bold'
          }}>{ username }</span>
        </div>
        <img 
          src={ imageUrl } 
          alt="post" 
          style = {{
            width: '100%'
          }}
        />
        <div style = {{
          fontSize: '1.5rem',
          padding: '5px'
        }}>
          <i 
            class="far fa-heart"
            style = { this.likeStyle(this.state.like) }
            onClick = { this.likePost }
          ></i>&nbsp;&nbsp;&nbsp;
          <i 
            class="far fa-comment"
            style = {{ 
              transform: 'scaleX(-1)'
            }}
          ></i>
          <div style = {{
            fontWeight: 'bold',
            fontSize: '0.9rem'
          }}>
            { this.state.likes } likes
          </div>
        </div>
        <CommentSection 
          comments = { this.state.data.comments } 
          timestamp = { this.state.data.timestamp }
          username = { this.props.username }
        />
      </div>
    )
  }
}

PostContainerTemplate.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  }).isRequired
}
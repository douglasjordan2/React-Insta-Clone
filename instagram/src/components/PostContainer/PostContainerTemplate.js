import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import moment from 'moment';
import CommentSection from '../CommentSection/CommentSectionTemplate';

export default class PostContainerTemplate extends Component {
  state = {
    comments: [],
    username: 'douglasjordan',
    text: '',
    open: false
  }

  componentDidMount() {
    this.setState({ comments: this.props.data.comments.map(comment => comment) })
  }

  menu = open => {
    return ({
      cursor: 'pointer',
      background: 'white',
      border: '2px solid black',
      opacity: open ? '1' : '0',
      position: 'absolute'
    })
  }

  openMenu = () => {
    this.setState({ open: !this.state.open })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitComment = () => {
    let comment  = {
      username: this.state.username,
      text: this.state.text
    }

    this.setState(prevState => {
      return {
        comments: [...prevState.comments, comment],
        username: 'douglasjordan',
        text: ''
      }
    })
  }

  render() {
    const { username, thumbnailUrl, imageUrl, likes, timestamp } = this.props.data
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
        { this.state.comments.map(comment => (
          <CommentSection 
            key = { uuid.v4() }
            comment = { comment }
          />
        )) }
        <span style = { time }>
          { 
            (() => {
              return moment(timestamp).startOf('hour').fromNow() 
            })()
          }
        </span>
        <div style = { textbox }>
          <input 
            type="text"
            placeholder="Add a comment..."
            style = { commentField }
            name="text"
            value = { this.state.text }
            onChange = { this.handleChange }
          />
          <div 
            style = {{ paddingBottom: '0.4rem', position: 'relative' }}
            onMouseEnter = { () => this.openMenu() }
            onMouseLeave = { () => this.openMenu() }
          >
            <div 
              style = { this.menu(this.state.open) }
              onClick = { () => this.submitComment() }
            >Post</div>
            <span>...</span>
          </div>
        </div>
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

const time = {
  fontSize: '0.8rem',
  color: 'gray',
  padding: '0 0 10px 10px'
}

const textbox = {
  display: 'flex',
  height: '20px',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  borderTop: '1px solid lightgray',
}

const commentField = {
  border: 'none',
  fontSize: '0.8rem',
  height: '100%',
  width: '100%'
}
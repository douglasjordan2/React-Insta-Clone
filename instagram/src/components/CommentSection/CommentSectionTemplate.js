import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import moment from 'moment';
import AddComment from './AddComment';
import Comment from './Comment';

export default class CommentSectionTemplate extends Component {
  state = {
    comments: [],
    username: 'douglas',
    text: '',
    timestamp: moment(this.props.timestamp).fromNow()
  }

  componentDidMount() {
    this.setState({ comments: this.props.comments })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submit = event => {
    event.preventDefault()
    let newComment = {
      username: this.state.username,
      text: this.state.text,
    }

    this.setState(prevState => {
      return {
        comments: [...prevState.comments, newComment],
        username: prevState.username,
        text: '',
        timestamp: moment(Date.now()).fromNow()
      }
    })
  }

  render() { console.log(this.state)
    console.log(this.state.comments)
    return (
      <>
        {this.state.comments.map(comment => (
          <Comment 
            comment = { comment }
            key = { uuid.v4() }
          />
        ))}
        <AddComment 
          text = { this.state.text }
          handleChange = { this.handleChange }
          submit = { this.submit }
          timestamp = { this.state.timestamp }
        />
      </>
    )
  }
}

CommentSectionTemplate.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.object).isRequired
}
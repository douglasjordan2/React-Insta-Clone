import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CommentSectionTemplate extends Component {
  render() {
    const { username, text } = this.props.comment

    return (
      <div>
        <div style = {{ marginBottom: '5px', paddingLeft: '10px' }}>{ username }&nbsp;<span style = {{ fontWeight: 'normal', padding: '0' }}>{ text }</span></div>
      </div>
    )
  }
}

CommentSectionTemplate.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.string).isRequired
}
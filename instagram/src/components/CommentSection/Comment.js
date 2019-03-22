import React, { Component } from 'react'
import styled, { css } from 'styled-components';

const Username = styled.span`
  font-weight: bold;
`;

export default class Comment extends Component {
  state = {
    comment: this.props.comment
  }

  componentDidMount() {
    this.setState({ comment: this.props.comment })
  }

  render() {
    const { username, text } = this.state.comment
    return (
      <div>
        <Username>{ username }
        </Username>&nbsp;
        { text }
      </div>
    )
  }
}

import React, { Component } from 'react'

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
        <span style = {{
          fontWeight: 'bold'
          }}>{ username }
        </span>&nbsp;
        { text }
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class AddComment extends Component {
  render() {
    return (
      <>
      <div style = {{
        height: '25px',
        display: 'flex',
        alignItems: 'center',
        color: 'gray',
        fontSize: '0.8rem'
      }}>{ this.props.timestamp }</div>
      <form
        onSubmit = { this.props.submit }
        style = {{
          marginTop: '10px',
          paddingTop: '5px',
          borderTop: '1px solid lightgray'
        }}
      >
        <input 
          name="text"
          value={ this.props.text }
          onChange = { this.props.handleChange }
          placeholder="Add a comment..."
          style = {{
            padding: '20px 3px',
            width: '90%',
            fontSize: '1rem',
            border: 'none'
          }}
        />
        <input 
          type="submit"
          style = {{
            position: 'absolute',
            left: '-9999px'
          }}
        />
      </form>
      </>
    )
  }
}

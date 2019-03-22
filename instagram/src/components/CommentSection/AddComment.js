import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Timestamp = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  color: gray;
  font-size: 0.8rem;
`;


const Form = styled.form`
  margin-top: 10px;
  padding-top: 5px;
  border-top: 1px solid lightgray;
`;

const Submit = styled.input`
  position: absolute;
  left: -9999px;
`;

const Comment = styled.input`
  padding: 20px 3px;
  width: 90%;
  font-size: 1rem;
  border: none;
`;

export default class AddComment extends Component {
  render() {
    return (
      <>
      <Timestamp>{ this.props.timestamp }</Timestamp>
      <Form
        onSubmit = { this.props.submit }
      >
        <Comment
          name="text"
          value={ this.props.text }
          onChange = { this.props.handleChange }
          placeholder="Add a comment..."
        />
        <Submit 
          type = "submit"
        />
      </Form>
      </>
    )
  }
}

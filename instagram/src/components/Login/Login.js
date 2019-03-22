import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20px;
  width: 100%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin: 5px 0;
`;

const Camera = styled.i`
  font-size: 1.3rem;
`;

const InstagramLogo = styled.img`
  width: 100px;
`;

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = () => {
    localStorage.setItem('username', this.state.username)

    this.setState(prevState => {
      return {
        username: '',
        password: ''
      }
    })
  }

  render() {
    return (
      <PageContainer>
        <Form
          onSubmit = { () => this.login() }
        >
          <Logo>
            <Camera
              className="fab fa-instagram"
            ></Camera>
            <InstagramLogo
              src = { require('../SearchBar/views/ig_search_bar.png') }
              alt="logo"
            />
          </Logo>
        
          <Input
            name="username"
            placeholder="Username"
            value = { this.state.username }
            onChange = { this.handleChange }
          />
          <Input 
            type="password"  
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange = { this.handleChange }
          />
          <Input 
            type="submit"
          />
        </Form>
      </PageContainer>
    )
  }
}
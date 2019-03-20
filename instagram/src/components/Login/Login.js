import React, { Component } from 'react'

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
      <div style = { loginPage }>
        <form 
          onSubmit = { this.login }
          style = { loginForm }
        >
        <div style = {{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '20px',
          width: '100%',
          marginBottom: '10px'
        }}>
          <i 
            class="fab fa-instagram"
            style = {{
              fontSize: '1.3rem'
            }}
          ></i>
          <img 
            src = { require('../SearchBar/views/ig_search_bar.png') }
            alt="logo"
            style = {{
              width: '100px'
            }}
          />
        </div>
          <input 
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}  
            placeholder='Username'
            style = { input }
          />
          <input 
            type="password"  
            name="password"
            value={this.state.password}
            onChange={this.handleChange} 
            placeholder='Password'
            style = { input }
          />
          <div>
            <input 
              type="submit"
              style = { submit }
            />
          </div>
        </form>
      </div>
    )
  }
}

const loginPage = {
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const loginForm = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end'
}

const input = {
  padding: '5px',
  margin: '5px 0'
}

const submit = {
  width: '100%'
}
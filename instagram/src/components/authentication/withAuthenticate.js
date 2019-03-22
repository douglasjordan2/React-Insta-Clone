import React from 'react';

const withAuthenticate = Posts => Login => class extends React.Component {
  state = {
    loggedIn: false
  }

  componentDidMount() {
    const username = localStorage.getItem('username');

    this.setState({ loggedIn: username !== null ? true : false })
  }

  render() {
    return (
      <>
        { this.state.loggedIn ? <Posts /> : <Login /> }
      </>
    )
  }
}

export default withAuthenticate
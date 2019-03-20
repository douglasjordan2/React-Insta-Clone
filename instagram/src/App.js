import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/Login';
import withAuthenticate from './components/authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)
const RenderPage = ComponentFromWithAuthenticate(LoginPage)

export default
class App extends Component {
  render() {
    return (
      <RenderPage />
    );
  }
}
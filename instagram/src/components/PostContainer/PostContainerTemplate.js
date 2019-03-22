import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSectionTemplate';
import styled, { css } from 'styled-components';

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 10%;
  margin: 10px 20px;
`;

const Username = styled.span`
  font-eight: bold;
`;

const PostImg = styled.img`
  width: 100%;
`;

const PostInfo = styled.div`
  font-size: 1.5rem;
  padding: 5px;
`;

function LikeIcon(props) {
  const LikeIcon = styled.i`
    color: ${ props.liked ? 'red' : 'black'};
    cursor: pointer;
  `;

  return (
    <LikeIcon
      liked = { props.liked }
      className = { props.className }
      onClick = { () => props.onClick() }
    ></LikeIcon>
  )
}

const CommentIcon = styled.i`
  transform: scaleX(-1);
`;

const Likes = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
`;

export default class PostContainerTemplate extends Component {
  state = {
    data: this.props.data,
    likes: this.props.likes,
    like: false
  }

  componentDidMount() {
    this.setState({ data: this.props.data, likes: this.props.likes })
  }

  likePost = () => {
    this.setState({ like: !this.state.like })

    return this.addLikes()
  }

  addLikes = () => {
    this.setState({ likes: this.state.like ? this.state.likes -= 1 : this.state.likes += 1 })
  }

  render() {
    const { username, thumbnailUrl, imageUrl } = this.state.data
    return (
      <Container>
        <Header>
          <Avatar 
            src={ thumbnailUrl } 
            alt="thumbnail"
          />
          <Username>{ username }</Username>
        </Header>
        <PostImg 
          src={ imageUrl } 
          alt="post"
        />
        <PostInfo>
          <LikeIcon 
            className="far fa-heart"
            onClick = { this.likePost }
            liked = { this.state.like }
          ></LikeIcon>&nbsp;&nbsp;&nbsp;
          <CommentIcon 
            className="far fa-comment"
          ></CommentIcon>
          <Likes>
            { this.state.likes } likes
          </Likes>
        </PostInfo>
        <CommentSection 
          comments = { this.state.data.comments } 
          timestamp = { this.state.data.timestamp }
          username = { this.props.username }
        />
      </Container>
    )
  }
}

PostContainerTemplate.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  }).isRequired
}
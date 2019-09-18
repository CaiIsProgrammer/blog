import React from "react";
import Post from "./post.js";
import styled from "styled-components";
const Posts = styled.div`
  display: flex;
  @media (max-width: 1300px) {
    flex-wrap: wrap;
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
export default class lastestPosts extends React.Component {
  postHandler = () => {
    if (this.props.pPosts && this.props.pPosts.length) {
      return this.props.pPosts.map(post => {
        return (
          <Post
            pImage={post.postImg}
            pName={post.name}
            pPost={post.post}
            key={post._id}
          />
        );
      });
    }
  };
  render() {
    return <Posts>{this.postHandler()}</Posts>;
  }
}

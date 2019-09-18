import React from "react";
import Posts from "../posts/postComponent.js";
import styled from "styled-components";
import Banner from "../home/banner/banner";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1800px) {
    align-items: center;
    flex-flow: column;
  }
`;
const ArticleContainer = styled.div`
  display: flex;
  flex-flow: column;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  height: 75px;
  width: 100%;
  background-color: black;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const Featured = styled.div`
  display: flex;
  flex-flow: column;
  margin: 25px;
  width: 1250px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  @media (max-width: 1300px) {
    width: 100%;
    margin: 10px 0px;
  }
`;
const Related = styled.div`
  display: flex;
  flex-flow: column;
  margin: 25px;
  width: 450px;
  height: 950px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    @media (max-width: 1300px) {
      width: 100%
      height:100%;
      margin: 10px 0px;
    }
`;
const PostContainer = styled.div`
  display: flex;
  overflow: auto;
`;
const HeaderContent = styled.h1`
  font-size: 1.5rem;
  margin: 10px;
`;
const ParagraphContent = styled.p`
  font-size: 1rem;
  margin: 10px;
`;
class Home extends React.Component {
  render() {
    return (
      <Container>
        <ArticleContainer>
          <Featured>
            <CardHeader>Featured Article</CardHeader>
            <Banner />
            <HeaderContent>Welcome to my blog post portfolio</HeaderContent>
            <ParagraphContent>
              Head on over to Post and make your own post to live on this page!
              Make sure to fill out all fields! you will be redirected on
              successful post
            </ParagraphContent>
          </Featured>

          <Featured>
            <CardHeader>All Articles</CardHeader>
            <PostContainer>
              <Posts />
            </PostContainer>
          </Featured>
        </ArticleContainer>
        <Related>
          <CardHeader>Related Articles</CardHeader>
        </Related>
      </Container>
    );
  }
}

export default Home;

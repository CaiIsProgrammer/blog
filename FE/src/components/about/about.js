import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./about.css";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: space-around;
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
  margin: 50px;
  max-width: 600px;
  min-width: 300px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  @media (max-width: 1300px) {
    width: 100%;
    height: 100%;
    margin: 10px 0px;
  }
`;
const Related = styled.div`
  display: flex;
  flex-flow: column;
  margin: 50px;
  max-width: 600px;
  min-width: 300px;
  height: 500px;
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
  text-decoration: none;
  list-style: none;
  line-height: 2em !important;
`;
export default function PaperSheet() {
  return (
    <Container>
      <ArticleContainer>
        <Featured>
          <CardHeader>Hello and welcome to my portfolio</CardHeader>

          <ParagraphContent>
            I am a Fullstack developer from the Asheville area!
            <br />
            This website is a small show case of what i can achive!
            <br />
            This blog site was made in six hours of work to showcase what i can
            do on a deadline.
          </ParagraphContent>
        </Featured>
        <Featured>
          <CardHeader>Education</CardHeader>
          <ParagraphContent>
            I have studied at Lambda School
            <br />
            I attended two years of college for a CS degree
            <br />I attened a magnet school in highschool to study in computer
            science and networking.
          </ParagraphContent>
        </Featured>
      </ArticleContainer>
      <Related>
        <CardHeader>What i can do</CardHeader>
        <ParagraphContent>
          <li>React.Js and Gatsby.Js ?? EZ PZ</li>
          <li>JS CSS LESS HTML Amazingly</li>
          <li>You want MongoDB I have that</li>
          <li>Still using SQL I can do that</li>
          <li>NodeJs is one of my best</li>
          <li>Need to Git to work. I can help with that</li>
          <li>If you are still needing a reason to hire me?</li>
          <li>You want jokes around the office!</li>
          <li>You want an enjoyable work enviroment!</li>
          <li>I am great at all of these things!</li>
        </ParagraphContent>
      </Related>
    </Container>
  );
}

import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  padding: 1rem;
  height: 50px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
  }
`;
const List = styled.li`
  color: white;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;

  @media (max-width: 600px) {
    transition: width 1s ease, height 1s ease;

    width: 100%;
    height: ${props => (props.menu ? "25px" : "0px")};
    border-bottom: 1px solid white;
    text-align: center;
    visibility: ${props => (props.menu ? "visible" : "hidden")};
    margin: ${props => (props.menu ? "5px" : "0px")};
    padding: ${props => (props.menu ? "10px 0px" : "0px")};
  }
`;
const HamMenu = styled.img`
  visibility: hidden;
  width: 0px;
  position: absolute;
  @media (max-width: 600px) {
    position: relative;
    width: 50px;
    visibility: visible;
  }
`;
const hamburger =
  "https://www.redeemclinic.co.uk/wp-content/uploads/2016/05/threelines.png";
class Nav extends React.Component {
  state = { menu: false };
  NavigateHandler = page => {
    console.log("click");
    this.props.history.push(page);
  };
  menuClickHandler = () => {
    this.setState({
      menu: !this.state.menu
    });
  };

  render() {
    return (
      <Header>
        <HamMenu
          menu={this.state.menu}
          src={hamburger}
          onClick={this.menuClickHandler}
        />
        <List menu={this.state.menu} onClick={() => this.NavigateHandler("/")}>
          Home
        </List>
        <List
          menu={this.state.menu}
          onClick={() => this.NavigateHandler("/Post")}
        >
          Post
        </List>
        <List
          menu={this.state.menu}
          onClick={() => this.NavigateHandler("/About")}
        >
          About
        </List>
        <List
          menu={this.state.menu}
          onClick={() => this.NavigateHandler("/Login")}
        >
          Login
        </List>
      </Header>
    );
  }
}

export default withRouter(Nav);

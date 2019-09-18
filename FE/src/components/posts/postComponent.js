import React from "react";
import Post from "./renderPosts";
import axios from "axios";
export default class App extends React.Component {
  state = { post: [] };

  componentDidMount = async () => {
    await axios
      .get("http://blog.crunchycode.me:3000/api/posts")
      .then(data => {
        console.log(data);
        this.setState({
          post: data.data
        });
      })
      .catch(res => {
        console.log(res);
      });
  };

  render() {
    return <Post pPosts={this.state.post} />;
  }
}

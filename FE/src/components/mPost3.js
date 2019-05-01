import React from "react"
import SidePost from "../components/sidepost"
import Post from "./postGroup3"
const axios = require("axios")
export default class App extends React.Component {
  state = { post: [] }

  componentDidMount = () => {
    axios.get("http://165.22.15.56:3000/api/posts").then(data => {
      this.setState({
        post: data.data,
      })
    })
  }

  render() {
    console.log(this.state.post)
    return <Post pPosts={this.state.post} />
  }
}

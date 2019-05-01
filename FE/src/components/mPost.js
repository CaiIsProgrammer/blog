import React from "react"
import SidePost from "../components/sidepost"
import Post from "./postGroup"
const axios = require("axios")
export default class App extends React.Component {
  state = { post: [] }

  componentDidMount = () => {
    axios.get("http://localhost:3000/api/posts").then(data => {
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

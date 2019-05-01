import React from "react"
import Post from "./post.js"
import "./post.css"

export default class lastestPosts extends React.Component {
  render() {
    let p1 = ""
    let p2 = ""
    let p3 = ""
    let n1 = ""
    let n2 = ""
    let n3 = ""
    let i1 = ""
    let i2 = ""
    let i3 = ""

    if (this.props.pPosts && this.props.pPosts.length) {
      p1 = this.props.pPosts[6].post
      p2 = this.props.pPosts[7].post
      p3 = this.props.pPosts[8].post
      n1 = this.props.pPosts[6].name
      n2 = this.props.pPosts[7].name
      n3 = this.props.pPosts[8].name
      i1 = this.props.pPosts[6].postImg
      i2 = this.props.pPosts[7].postImg
      i3 = this.props.pPosts[8].postImg
    }
    return (
      <div className="posts">
        <Post pImage={i1} pName={n1} pPost={p1} />
        <Post pImage={i2} pName={n2} pPost={p2} />
        <Post pImage={i3} pName={n3} pPost={p3} />
      </div>
    )
  }
}

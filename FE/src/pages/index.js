import React from "react"
import SidePost from "../components/sidepost"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/postGroup"
import MPost from "../components/mPost"
import MPost2 from "../components/mPost2"
import MPost3 from "../components/mPost3"
import Banner from "../components/banner"

import "./index.css"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <mdiv>
      <div className="layrow">
        <div className="laycolLeft">
          <SidePost />
        </div>
        <div className="laycolmid">
          <Banner />
          <MPost />
          <MPost />
          <MPost />
        </div>
        <div className="laycolRight">
          <SidePost />
          <SidePost />
          <SidePost />
        </div>
      </div>
    </mdiv>
  </Layout>
)

export default IndexPage

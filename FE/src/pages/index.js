import React from "react"
import SidePost from "../components/sidepost"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/postGroup"
import MPost from "../components/mPost"
import MPost2 from "../components/mPost2"
import MPost3 from "../components/mPost3"
import Banner from "../components/banner"
import adspace from "../images/adspace"
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
          <MPost2 />
          <MPost3 />
        </div>
        <div className="laycolRight">
          <SidePost
            img={adspace}
            title="This is an AD"
            body="this can be used for ads"
          />{" "}
          <SidePost
            img={adspace}
            title="This is an AD"
            body="this can be used for ads"
          />
          <SidePost
            img={adspace}
            title="This is an AD"
            body="this can be used for ads"
          />
        </div>
      </div>
    </mdiv>
  </Layout>
)

export default IndexPage

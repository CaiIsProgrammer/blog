import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1
      style={{
        color: `#b70092`,
        paddingTop: 0,
        display: `inline`,
      }}
    >
      404
    </h1>
    <h1
      style={{
        display: `inline`,
      }}
    >
      : NOT FOUND
    </h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

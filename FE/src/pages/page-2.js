import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form.js"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Form />
  </Layout>
)

export default SecondPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <ul>
      <li>
        <Link to="/about" activeStyle={{ color: "red" }}>
          About
        </Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage

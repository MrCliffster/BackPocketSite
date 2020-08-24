import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import Slider from "../components/slider";
import SEO from "../components/seo";
import Portfolio from "../components/portfolio";
import WhoWeAre from "../components/whoweare";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <Portfolio />
    <WhoWeAre />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

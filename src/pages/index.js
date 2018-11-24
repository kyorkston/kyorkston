import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout
    image={data.layoutImage.childImageSharp.fluid}
  >
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    layoutImage: file(
      relativePath: { regex: "/layoutImage/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

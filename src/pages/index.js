import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout
    image={data.file.childImageSharp.fluid}
  >
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(
      relativePath: { regex: "/layoutImage.jpg/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 500,
          quality: 100
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

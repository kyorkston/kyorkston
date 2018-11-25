import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout
    layoutImage={data.file.childImageSharp.fluid}
  >
    <i>Under construction</i>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
   file(
      relativePath: { regex: "/layoutImage.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

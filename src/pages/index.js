import React from 'react'

import Layout from '../components/Layout/layout.js'

const IndexPage = ({ data }) => (
  <Layout images={data}>
    <i>Under construction</i>
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const imageQuery = graphql`
  query {
    roadTrip: file(relativePath: { regex: "/roadTrip.jpg/" }) {
      ...fluidImage
    }
    amsterdam: file(relativePath: { regex: "/amsterdam.jpg/" }) {
      ...fluidImage
    }
    bathStreet: file(relativePath: { regex: "/bathStreet.jpg/" }) {
      ...fluidImage
    }
    edinburghUni: file(relativePath: { regex: "/edinburghUni.jpg/" }) {
      ...fluidImage
    }
    parkheadChurch: file(relativePath: { regex: "/parkheadChurch.jpg/" }) {
      ...fluidImage
    }
    queensParkChurch: file(relativePath: { regex: "/queensParkChurch.jpg/" }) {
      ...fluidImage
    }
    shawlandsImage: file(relativePath: { regex: "/shawlandsImage.jpg/" }) {
      ...fluidImage
    }
  }
`

import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import Bio from '../components/Bio'

const IndexPage = (props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div>
      {loading ? (
        <ReactLoading
          style={{ display: 'flex', justifyContent: 'center' }}
          type={'spin'}
          color={'grey'}
          height={80}
          width={80}
        />
      ) : (
          <Layout images={props.data}>
            <Bio />
          </Layout>
        )}
    </div>
  )
}

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 700) {
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

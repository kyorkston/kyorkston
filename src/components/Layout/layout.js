import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import LayoutHead from './LayoutHead'
import LayoutFooter from './LayoutFooter'

import './layout.css'

const Container = styled.div`
  margin: 20px;
  display: flex;
`

function newImageOnLoad(images) {
  let imageArray = []
  let randomIndex

  Object.values(images).forEach(image => {
    imageArray.push(image)
  })

  randomIndex = Math.floor(Math.random(imageArray.length - 1) * 10)

  if (!(randomIndex >= 0 && randomIndex <= imageArray.length - 1)) {
    randomIndex = 0
  }

  return (
    <Img
      style={{ display: 'flex', alignSelf: 'flex-end' }}
      fadeIn
      imgStyle={{
        width: `auto`,
        position: `fixed`,
        left: `none`,
        paddingLeft: '40px',
      }}
      fluid={imageArray[randomIndex].childImageSharp.fluid}
    />
  )
}

const Layout = ({ children, images }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Container>
          <Helmet title={data.site.siteMetadata.title}>
            <html lang="en" />
          </Helmet>
          <div>
            <LayoutHead data={data.site.siteMetadata.title} children={children} />
            <LayoutFooter />
          </div>
          {images && newImageOnLoad(images)}
        </Container>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  images: PropTypes.object,
}

export default Layout

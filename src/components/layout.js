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
  const randomIndex = Math.floor(Math.random(imageArray.length - 1) * 10)
  
  Object.values(images).forEach(image => {
    imageArray.push(image)
  })

  return (
    <Img
      style={{display: 'flex', alignSelf: 'flex-end'}}
      fadeIn
      imgStyle={{ width: `auto`, position: `fixed`, left: `none`, paddingLeft: '100px' }}
      fluid={imageArray[randomIndex].childImageSharp.fluid}
    />
  )
}

const Layout = ({ children, images }) => (
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
          <LayoutHead
            data={data}
            children={children}
          />
          <LayoutFooter />
        </div>
        {images && (
          newImageOnLoad(images)
        )}
      </Container>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  images: PropTypes.object
}

export default Layout

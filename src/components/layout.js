import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import LayoutHead from './LayoutHead'
import LayoutFooter from './LayoutFooter'

import './layout.css'

function newImageOnLoad(images) {
  let imageArray = []

  Object.values(images).forEach(image => {
    imageArray.push(image)
  })
  console.log(imageArray)

  const randomIndex = Math.random(imageArray.length - 1)

  return (
    <Img
      id="layout-container__image"
      fadeIn
      imgStyle={{ width: `auto`, position: `fixed`, left: `none` }}
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
      <div id="layout-container">
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>
        <div>
          <LayoutHead
            id="layout-container__header"
            data={data}
            children={children}
          />
          <LayoutFooter />
        </div>
        {true && (
          newImageOnLoad(images)
        )}
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  layoutImage: PropTypes.object,
}

export default Layout

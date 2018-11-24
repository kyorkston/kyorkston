import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// import image from '../images/IMG_2748.jpg'
import Img from "gatsby-image"

import './layout.css'

const Layout = ({ children, image }) => (
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
        <Helmet
          title={data.site.siteMetadata.title}
        >
          <html lang="en" />
        </Helmet>
        <div id="layout-container__header">
          <div>
            <div>
              <h1>{data.site.siteMetadata.title}</h1>
              <span>-</span>
            </div>
            {children}
          </div>
          <footer id="layout-container__footer">
            <p>hello</p>
          </footer>
        </div>
        <Img id="layout-container__image" fluid={image} />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

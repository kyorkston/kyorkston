import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import './layout.css'

const Layout = ({ children, layoutImage }) => (
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
          -
            <ul id="footer-links">
              <a id="footer-links__anchor-item" href="https://twitter.com/kristiejaywhy">Twitter</a>
              <a id="footer-links__anchor-item" href="https://github.com/kyorkston">Github</a>
              <a href="https://www.linkedin.com/in/kristie-yorkston-a7a193138/">LinkedIn</a>
            </ul>
            <small id="footer-links__small-anchor-item"><a>Github Repo</a></small>
          </footer>
        </div>
        {layoutImage && 
          <Img 
            id="layout-container__image" 
            fadeIn 
            imgStyle={{ width: `auto`, position: `fixed`, left: `none`}} 
            fluid={layoutImage} 
          />
        }
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { connect } from 'react-fela'

import LayoutHead from './LayoutHead'
import LayoutFooter from './LayoutFooter'

import './layout.css'

const Layout = ({ children, layoutImage, styles }) => (
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
        <LayoutHead
          id="layout-container__header"
          data={data}
          children={children}
        />
        <LayoutFooter />
        {layoutImage && (
          <Img
            id="layout-container__image"
            fadeIn
            imgStyle={{ width: `auto`, position: `fixed`, left: `none` }}
            fluid={layoutImage}
          />
        )}
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  layoutImage: PropTypes.object,
  styles: PropTypes.object.isRequired
}

const styles = {}

export default connect(styles)(Layout)

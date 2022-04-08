import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import LayoutHead from './LayoutHead'
import LayoutFooter from './LayoutFooter'

const Container = styled.div`
  margin: 20px;
  display: flex;
`

const Layout = ({ children }) => {
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

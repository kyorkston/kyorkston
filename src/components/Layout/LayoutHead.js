import React from 'react'

import styled from 'styled-components'

const Heading = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
`

const LayoutHead = ({ data, children }) => (
  <div>
    <div>
      <Heading>{data.site.siteMetadata.title}</Heading>
      <span>-</span>
    </div>
    {children}
  </div>
)

export default LayoutHead

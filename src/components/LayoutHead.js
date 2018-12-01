import React from 'react'
import styled from 'styled-components'

const LayoutHead = ({ data, children }) => (
  <div>
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <span>-</span>
    </div>
    {children}
  </div>
)

export default LayoutHead

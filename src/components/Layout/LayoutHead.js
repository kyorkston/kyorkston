import React from 'react'

import styled from 'styled-components'

const Heading = styled.h1`
  font-family: Montserrat;
  font-weight: bold;
  text-rendering: optimizeLegibility;
`

const LinkList = styled.ul`
  display: inline-flex;
  padding-left: 0;
  padding-bottom: 16px;
  justify-content: space-between;
`

const LinkItem = styled.a`
  padding-right: 10px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
`

const LayoutHead = ({ data, children }) => (
  <div>
    <div>
      <Heading>{data.site.siteMetadata.title}</Heading>
      <LinkList>
        <LinkItem href="/">Home</LinkItem>
        <LinkItem href="/blog/25-12-2018">Blog</LinkItem>
      </LinkList>
      <div>-</div>
    </div>
    {children}
  </div>
)

export default LayoutHead

import React from 'react'
import styled from 'styled-components'

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

const SmallLink = styled.a`
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
`

const LayoutFooter = () => (
  <footer style={{ fontWeight: '300' }}>
    -
    <div>
      <LinkList>
        <LinkItem href="https://github.com/kyorkston">Github</LinkItem>
        <LinkItem href="https://www.linkedin.com/in/kristie-yorkston-a7a193138/">
          LinkedIn
        </LinkItem>
        <LinkItem href="https://twitter.com/kristiejaywhy">Twitter</LinkItem>
      </LinkList>
    </div>
    <small>
      <SmallLink href="https://github.com/kyorkston/kyorkston">
        Github Repo
      </SmallLink>
    </small>
  </footer>
)

export default LayoutFooter

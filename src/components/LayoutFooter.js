import React from 'react'
import styled from 'styled-components'

const LinkList = styled.ul`
    margin: 0;
    list-styles: none;
    color: black;
`

const LinkItem = styled.a`
    padding-right: 10px;
`

const SmallLink = styled.a`
    text-transform: uppercase;
`

const LayoutFooter = () => (
  <footer>
    -
    <LinkList>
      <LinkItem href="https://twitter.com/kristiejaywhy">
        Twitter
      </LinkItem>
      <LinkItem href="https://github.com/kyorkston">
        Github
      </LinkItem>
      <LinkItem href="https://www.linkedin.com/in/kristie-yorkston-a7a193138/">
        LinkedIn
      </LinkItem>
    </LinkList>
    <small>
      <SmallLink
        href="https://github.com/kyorkston/kyorkston"
      >
        Github Repo
      </SmallLink>
    </small>
  </footer>
)

export default LayoutFooter

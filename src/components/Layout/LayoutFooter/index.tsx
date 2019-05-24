import React from 'react'

import { Footer, LinkItem, LinkList, SmallLink } from './styles'

const LayoutFooter = (): JSX.Element => (
  <Footer>
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
  </Footer>
)

export default LayoutFooter

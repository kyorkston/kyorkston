import React from 'react'

import { Heading, LinkItem, LinkList } from './styles'

const LayoutHead = ({ title, children }: { title: string, children: JSX.Element[] }): JSX.Element => (
  <div>
    <div>
      <Heading>{title}</Heading>
      <LinkList>
        <LinkItem href="/">Home</LinkItem>
        <LinkItem href="/blog">Blog</LinkItem>
      </LinkList>
      <div>-</div>
    </div>
    {children}
  </div>
)

export default LayoutHead

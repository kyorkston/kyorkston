import React from 'react'

import { Heading, Paragraph } from './styles'

const Bio = (): JSX.Element => {
  return (
    <div>
      <Heading>
        A Software Engineer at FanDuel with an interest in full-stack.
      </Heading>
      <Paragraph>
        With a love for working with computers since I was a kid it took me a
        while to discover my calling, after a stint at{' '}
        <a href="https://codeclan.com/">CodeClan</a> I'm in an industry and job
        I love.
      </Paragraph>
      <Paragraph>
        Keen to learn new things and give back, I'm an active member in the tech
        community, attending meetups and coaching at{' '}
        <a href="https://codebar.io/">Codebar.</a>
      </Paragraph>
    </div>
  )
}

export default Bio

import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
  max-width: 525px;
`

const Bio = () => {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <h2 style={{ fontWeight: '300' }}>
        A Frontend Engineer at FanDuel
        <br /> with an interest in full-stack.
      </h2>
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

import React from 'react'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

import Layout from '../components/Layout/layout'
import Bio from '../components/Bio/bio'

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

class IndexPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    this.setState({ loading: false })
  }

  render() {
    return (
      <div>
        {
          this.state.loading ? (
            <SpinnerContainer>
              <ReactLoading type={'spin'} color={'grey'} height={80} width={80} />
            </SpinnerContainer>
          ) : (
            <Layout images={this.props.data} >
              <Bio />
            </Layout>
          )
        }
      </div>
    )
  }
}

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const imageQuery = graphql`
  query {
    roadTrip: file(relativePath: { regex: "/roadTrip.jpg/" }) {
      ...fluidImage
    }
    amsterdam: file(relativePath: { regex: "/amsterdam.jpg/" }) {
      ...fluidImage
    }
    bathStreet: file(relativePath: { regex: "/bathStreet.jpg/" }) {
      ...fluidImage
    }
    edinburghUni: file(relativePath: { regex: "/edinburghUni.jpg/" }) {
      ...fluidImage
    }
    parkheadChurch: file(relativePath: { regex: "/parkheadChurch.jpg/" }) {
      ...fluidImage
    }
    queensParkChurch: file(relativePath: { regex: "/queensParkChurch.jpg/" }) {
      ...fluidImage
    }
    shawlandsImage: file(relativePath: { regex: "/shawlandsImage.jpg/" }) {
      ...fluidImage
    }
  }
`

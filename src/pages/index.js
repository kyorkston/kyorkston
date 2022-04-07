import React, { useEffect, useState } from 'react'

import Layout from '../components/Layout/layout'
import Bio from '../components/Bio'

const IndexPage = (props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div>
      {loading ? (
        <>Loading</>
      ) : (
          <Layout images={props.data}>
            <Bio />
          </Layout>
        )}
    </div>
  )
}

export default IndexPage
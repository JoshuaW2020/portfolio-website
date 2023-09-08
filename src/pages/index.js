import * as React from 'react'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <h2>Section 1</h2>
      </section>
      <section>
        <h2>Section 2</h2>
      </section>
      <section>
        <h2>Section 3</h2>
      </section>
    </Layout>
  )
}

export const Head = () => <title>Joshua Walsh - SWE</title>

export default IndexPage
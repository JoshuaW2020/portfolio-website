import * as React from 'react'
import '../pageStyles/index.scss'
import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutMe from '../components/aboutMe'
import Projects from '../components/projects'
import Contact from '../components/contact'

const IndexPage = () => {
  return (
    <Layout>
      <AboutMe />
      <Projects />
      <Contact />
    </Layout>
  )
}

export const Head = () => <Seo />

export default IndexPage
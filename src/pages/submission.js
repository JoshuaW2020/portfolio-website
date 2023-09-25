import * as React from 'react'
import '../pageStyles/index.scss'
import Seo from '../components/seo'

export default function Submission() {


  return (
    <div>
      <h2>Thanks for contacting me!</h2>
      <a href="/">Go back to homepage</a>
    </div>
  )
}

export const Head = () => <Seo />
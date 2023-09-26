import * as React from 'react'
import { container } from '../pageStyles/submission.module.scss'
import Seo from '../components/seo'

export default function Submission() {


  return (
    <div className={container}>
      <h2>Thanks for contacting me!</h2>
      <a href="/#home">Go back to homepage?</a>
    </div>
  )
}

export const Head = () => <Seo />
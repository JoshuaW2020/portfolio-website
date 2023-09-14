import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {  container,
          text,
          image,
          skillsBox, } from "./aboutMe.module.scss"
import Programming from "../assets/images/programming.svg"

const AboutMe = () => {

  return (
    <section class={container} id="home">
      <h2>Hello, My Name is Joshua Walsh</h2>
      <article class={text}>
        <p>
          I'm an experienced software developer specializing in full-stack development. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac elit lacinia ex laoreet aliquet. Sed facilisis viverra imperdiet. Curabitur id varius libero, id venenatis libero. 
        </p>
      </article>
      <div class={image}>
        <Programming />
      </div>
      <div class={skillsBox}>
        <StaticImage alt="HTML5" src="../assets/images/information.svg" />
        <StaticImage alt="CSS3" src="../assets/images/information.svg" />
        <StaticImage alt="JavaScript" src="../assets/images/information.svg" />
        <StaticImage alt="TypeScript" src="../assets/images/information.svg" />
        <StaticImage alt="React.js" src="../assets/images/information.svg" />
        <StaticImage alt="Node.js" src="../assets/images/information.svg" />
        <StaticImage alt="Express.js" src="../assets/images/information.svg" />
        <StaticImage alt="Java" src="../assets/images/information.svg" />
      </div>
    </section>
  )
}

export default AboutMe
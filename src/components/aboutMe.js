import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {  container,
          text,
          image,
          skillsBox,
          skill, } from "./aboutMe.module.scss"
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
        <div className={skill}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-html5" width="auto" height="auto" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e5989b" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <title>HTML5</title>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
            <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
          </svg>
        </div>
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
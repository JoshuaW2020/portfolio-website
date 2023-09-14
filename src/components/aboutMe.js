import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { container } from "./aboutMe.module.scss"

const AboutMe = () => {

  return (
    <section class={container} id="home">
      <article>
        <h2>Hello, my name is Joshua Walsh</h2>
        <p>
          I'm an experienced software developer specializing in full-stack development. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac elit lacinia ex laoreet aliquet. Sed facilisis viverra imperdiet. Curabitur id varius libero, id venenatis libero. Maecenas vel risus porttitor urna aliquet aliquam nec ut mi. Duis in nisl sit amet risus aliquam convallis eu nec ante. Suspendisse id lacus nibh. Nunc porta sodales consectetur. Duis sagittis varius nibh, in vehicula est posuere ac.
        </p>
      </article>
      <div>
        <StaticImage 
          alt=""
          src="../assets/images/programming.svg"
        />
      </div>
      <div>
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
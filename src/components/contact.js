import * as React from "react"
import ContactForm from "./contactForm"
import {  container,
          form, } from "./contact.module.scss"

const Contact = () => {

  return (
    <section className={container} id="contact">
      <h3>Like what you see and want to connect? Fill out the form below or checkout my linkedin at the top right!</h3>
      <div className={form}>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
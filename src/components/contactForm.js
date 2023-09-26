import * as React from "react"
import { useForm } from "react-hook-form"
import { navigate } from "gatsby"
import {  container,
          error,
          formButton, } from "./contactForm.module.scss"

function encode(data) {
  return Object.keys(data)
      .map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
}

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data, e) => {
    e.preventDefault()
    const form = e.target

    //console.log(data)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
          'form-name': 'contact',
          ...data,
      }),
    })
    .then(response => {
        reset()
        navigate(form.getAttribute('action'))
        console.log(response)
    })
    .catch(error => {
        alert('There was an issue sending message, send me an email at: joshua.walsh1998@gmail.com')
        console.log(error)
    })
  }

  return (
    <form className={container} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" onSubmit={handleSubmit(onSubmit)} action="/submission" id="contactForm">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <div>
        <label>
          Name: <br />
        </label>
        <input 
          name="name"
          type="text"
          placeholder="Your Name"
          {...register("name", {required: true})}
        />
        {errors.name && (
          <>
            <p className={error}>Please enter your name</p>
          </>
        )}
      </div>

      <div>
        <label>
          Email: <br />
        </label>
        <input
          name="email"
          type="email"
          placeholder="Your Email Address"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
            },
          })}
        />
        {errors.email && (
          <>
            <p className={error}>Please enter a valid email address</p>
          </>
        )}
      </div>

      <div>
        <label>
          Message: <br />
        </label>
        <textarea
          name="message"
          type="text"
          placeholder="Type your message here..."
          {...register("message", {required: true})}
        />
        {errors.message && (
          <>
            <p className={error}>Please enter a message</p>
          </>
        )}
      </div>

      <button className={formButton} type="submit">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
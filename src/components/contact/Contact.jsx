import React from 'react'
import "./contact.css"
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact__container">
        <article className='mail__container'>
          <AiOutlineMail/>
          <div>
            <h4>Email</h4>
            <h5>mooncrestappsdev@gmail.com</h5>
            <a href="mailto:mooncrestappsdev@gmail.com">Send A Message</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Contact
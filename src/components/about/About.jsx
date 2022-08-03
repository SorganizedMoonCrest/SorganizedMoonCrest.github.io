import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>

      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h5>Programming Languages</h5>
              <small>C#, Java, Kotlin, JavaScript, Python</small>
            </article>
            <article className='about__card'>
              <h5>Projects</h5>
              <small>Pocket Day Planner</small>
            </article>
            <article className='about__card'>
              <h5>Other Skills</h5>
              <small>Webint, Osint and more.</small>
            </article>
          </div>

          <p>
            My name is Kfir Raphael Eliyahu. I'm 18 years old. I started learning how to code when I was 16 years old. I learned Python and C# at my highschool.
            Eventually I realized I love making apps and GUIs. So I started learning Java and Kotlin.            
          </p>

        </div>
      </div>

    </section>
  )
}

export default About
import React from 'react'
import "./experience.css"
import {AiOutlineCheck} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience">
          <h3>General Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
            <AiOutlineCheck/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
            <AiOutlineCheck/>
              <div>
              <h4>C#</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
            <AiOutlineCheck/>
              <div>
              <h4>Kotlin (Java)</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
            <AiOutlineCheck/>
              <div>
              <h4>SQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <AiOutlineCheck/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <AiOutlineCheck/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
            <AiOutlineCheck/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
            <AiOutlineCheck/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience
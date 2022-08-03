import React from 'react'
import './pdp.css'
import pdpicon from "../../assets/pdp_icon.jpeg"
import scdark1 from "../../assets/screenshot_dark1.jpeg"
import scdark2 from "../../assets/screenshot_dark2.jpeg"
import sclight1 from "../../assets/screenshot_light1.jpeg"
import sclight2 from "../../assets/screenshot_light2.jpeg"
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const images = [
  {
    imgSrc: scdark1
  },
  {
    imgSrc: scdark2
  },
  {
    imgSrc: sclight1
  },
  {
    imgSrc: sclight2
  },
];

const Pdp = () => {
  return (
    <section id='pdp'>
      <h5>My Projects</h5>
      <h2>Mobile Apps</h2>
      <h1>Pocket Day Planner</h1>
      
      <div className='container pdp__container'>
      <article className='app__about'>
          <img className='app__icon' src={pdpicon} alt="App Icon" />

          <div className="app__screenshots">
          <Swiper 
          modules={[Pagination, Autoplay]} 
          spaceBetween={5} slidesPerView={1} 
          pagination={{clickable: true}} loop={true} 
          autoplay={{delay: 2000, disableOnInteraction: false}}>
              {
                images.map(({imgSrc}, index) =>{
                  return (
                    <SwiperSlide key={index} className="screenshot">
                        <img  className="screenshot__image"src={imgSrc} alt="" />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>

        </div>
        </article>
        <article>
                    
        <div>
            <p className='app__paragraph'>
              Pocket Day Planner is all about making your day more convient.
              It helps you organize the tasks of your day, with time or without, to provide monitoring of the day.
              Follow this link to check it out on Google Play Store.
            </p>
            <a href="https://play.google.com/store/games">Pocket Day Planner</a>
          </div>

        </article>

      </div>
    </section>
  )
}

export default Pdp
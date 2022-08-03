import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Pdp from './components/pdp/Pdp'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Pdp/>
      <Contact/>
    </>
  )
}

export default App
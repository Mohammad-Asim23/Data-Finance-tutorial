import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'


function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer/>
    </div>
  )
}

export default App

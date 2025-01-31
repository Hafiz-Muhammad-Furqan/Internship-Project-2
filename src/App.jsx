import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary-dark">
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
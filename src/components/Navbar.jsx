import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-accent glow-effect">
              Wanderlust Adventures
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="nav-link">Home</a>
              <a href="#destinations" className="nav-link">Destinations</a>
              <a href="#packages" className="nav-link">Packages</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button className="btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
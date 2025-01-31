function Footer() {
  return (
    <footer className="bg-primary-dark py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="nav-link">Terms and Conditions</a></li>
              <li><a href="#" className="nav-link">Privacy Policy</a></li>
              <li><a href="#" className="nav-link">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="nav-link">Paris</a></li>
              <li><a href="#" className="nav-link">Maldives</a></li>
              <li><a href="#" className="nav-link">Skardu</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📍 123 Adventure Street</li>
              <li>📧 info@wanderlustadventures.com</li>
              <li>📞 +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-light pt-8 text-center text-gray-400">
          <p>© 2025 Wanderlust Adventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
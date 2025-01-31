function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact <span className="text-accent">Us</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="card">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-primary border border-secondary-light
                           focus:border-accent outline-none transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-primary border border-secondary-light
                           focus:border-accent outline-none transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-primary border border-secondary-light
                           focus:border-accent outline-none transition-all duration-300"
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-semibold text-accent mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>📍 123 Adventure Street, Travel City</p>
              <p>📧 info@wanderlustadventures.com</p>
              <p>📞 +1 (555) 123-4567</p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-accent hover:text-accent-glow transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-accent hover:text-accent-glow transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-accent hover:text-accent-glow transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
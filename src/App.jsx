import Navigation from './components/Navigation'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <Hero />

      {/* Services Section - Coming Soon */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-gray mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-gray/70">
            Coming soon...
          </p>
        </div>
      </section>

      {/* About Section - Coming Soon */}
      <section id="about" className="py-20 px-4 bg-sage/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-gray mb-4">
            About Us
          </h2>
          <p className="text-lg text-slate-gray/70">
            Coming soon...
          </p>
        </div>
      </section>

      {/* Contact Section - Coming Soon */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-gray mb-4">
            Contact
          </h2>
          <p className="text-lg text-slate-gray/70">
            Coming soon...
          </p>
        </div>
      </section>
    </div>
  )
}

export default App

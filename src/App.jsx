import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#000000'}}>
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  )
}

export default App

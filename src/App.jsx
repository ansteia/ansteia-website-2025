import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Members from './components/Members'

// Homepage Component
function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#000000'}}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </div>
  )
}

export default App

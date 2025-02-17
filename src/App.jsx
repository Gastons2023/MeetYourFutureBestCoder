import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
  <>
    <Header />
    <main>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    </main>
    <Footer />
  </>
  )
}

export default App

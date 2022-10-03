import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/index.js'
import Layout from './components/Layout'
import About from './components/About/index.js'
import Contact from './components/Contact/index.js'
import Portfolio from './components/Portfolio/index.js'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

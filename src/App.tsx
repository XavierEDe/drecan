import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FAQPage from './pages/FAQPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

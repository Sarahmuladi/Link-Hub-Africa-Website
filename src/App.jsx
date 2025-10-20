import './App.css'
import ContactUs from './Pages/contactUs'
import OurServices from './Pages/ourServices'
import AboutUs from './Pages/aboutUs'
import HomePage from './Pages/homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/aboutUs' element={<AboutUs/>} />
          <Route path='/ourServices' element={<OurServices/>} />
          <Route path='/contactUs' element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import NavBar from '../Components/navBar'
import Footer from '../Components/footer'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {

const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
    <NavBar/>

    <div className='flex-grow  flex flex-col items-center justify-start bg-gradient-to-br from-[#1398B7] via-[#0B7CA0] to-[#0B6285]'>
    <div className=' text-white mt-12 mb-2 p-8  text-center max-w-xl mx-auto'>
    <h1 className='text-2xl font-bold mb-3'>The Link Hub Africa</h1>
  <p className='text-xl font-semibold mb-2'>
    Bringing Education, Industry and Entrepreneurship in Africa
  </p>
  
  <button 
  className='bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/80 transition duration-300'
  onClick={() => navigate('/ourServices')}>
    Discover Opportunities
  </button>
</div>

<div className=" w-full max-w-6xl h-auto rounded-3xl flex items-center justify-center mx-auto p-4 sm:p-6">
    <img src="Images/img1.jpg" alt="Hero section image" className="w-full h-auto object-contain" />
  </div>

    </div>

    <Footer/>
    </div>
  )
}

export default HomePage
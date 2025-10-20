import React from 'react'
import NavBar from '../Components/navBar'
import Footer from '../Components/footer'

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <NavBar/>

    <div className='flex-grow  flex flex-col items-center justify-start bg-gradient-to-br from-[#1398B7] via-[#0B7CA0] to-[#0B6285]'>
    <div className="max-w-4xl mx-auto px-4 py-12 ">
  <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6">
    About Us
  </h1>
  <p className="text-center text-gray-700 text-base sm:text-lg leading-relaxed">
    The Link Hub Africa empowers youth and businesses by bridging education, industry, 
    and entrepreneurship. Through strategic partnerships, we create opportunities that 
    drive employability, innovation, and sustainable growth.
  </p>
</div>


    <div className="max-w-xl mx-auto my-12 shadow-lg rounded-lg overflow-hidden">
        <div className="bg-secondary text-white text-center py-6 px-4">
        <h2 className="text-2xl font-bold">Our Vision</h2>
        </div>

      <div className="bg-white text-center p-6">
        <p className="text-gray-700">
        To become Africa's leading hub for youth empowerment, employability, and business growth
        </p>
        </div>
    </div>

    <div className="max-w-xl mx-auto my-12 shadow-lg rounded-lg overflow-hidden">
        <div className="bg-secondary text-white text-center py-6 px-4">
        <h2 className="text-2xl font-bold">Our Mission</h2>
        </div>

      <div className="bg-white text-center p-6">
        <p className="text-gray-700">
        To bridge the gap between education and industry by providing innovative solutions that enhance
        employability, entrepreneurship, and sustainable development
        </p>
        </div>
    </div>


    <div className="max-w-xl mx-auto my-12 shadow-lg rounded-lg overflow-hidden">
        <div className="bg-secondary text-white text-center py-6 px-4">
        <h2 className="text-2xl font-bold">Our Core Values</h2>
        </div>

      <div className="bg-white text-center px-20 py-6">
        <p className="text-gray-700">
        Integrity, Innovation, Collaboration, Impact and Excellency
        </p>
        </div>
    </div>


    </div>

    
    <Footer/>

    </div>
  )
}

export default AboutUs
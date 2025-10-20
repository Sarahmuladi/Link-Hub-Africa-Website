import React from 'react'
import NavBar from '../Components/navBar'
import Footer from '../Components/footer'

const AboutUs = () => {
  return (
    <>
    <NavBar/>

    <div className="max-w-4xl mx-auto px-4 py-12">
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

      <div className="bg-white text-center p-6">
        <p className="text-gray-700">
        <span>Integrity, Innovation, Collaboration, Impact and Excellency</span>
        </p>
        </div>
    </div>

    <Footer/>

    </>
  )
}

export default AboutUs
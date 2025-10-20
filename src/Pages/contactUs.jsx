import React from 'react'
import NavBar from '../Components/navBar'
import Footer from '../Components/footer'

function ContactUs() {
  return (
    <>
      <NavBar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-4">Let's Connect!</h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          We would love to hear from you. Whether you have questions, 
          feedback, or partnership inquiries, feel free to reach out to us!
        </p>

        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea 
            placeholder="Message" 
            rows="5"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button 
            type="submit"
            className="bg-accent text-white font-semibold py-3 rounded-md hover:bg-accent/80 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default ContactUs

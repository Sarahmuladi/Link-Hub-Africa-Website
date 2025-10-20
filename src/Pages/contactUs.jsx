import React from 'react'
import NavBar from '../Components/navBar'
import Footer from '../Components/footer'
import { useState } from 'react'

function ContactUs() {

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target

    fetch ( '/contactUs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
    .then(() => setSubmitted(true))
    .catch((error) => alert(error))
  }

  if (submitted) {
    return ( 
      <div className='text-center py-10 text-tertiary'>
        <h2 className='text-2xl font-bold mb-2 text-accent'>Thank You!</h2>
        <p>We have received your message and we will get back to you shortly.</p>
      </div>
    )
  }


  return (
    <>
      <NavBar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-4">Let's Connect!</h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          We would love to hear from you. Whether you have questions, 
          feedback, or partnership inquiries, feel free to reach out to us!
        </p>

        <form 
        className="flex flex-col gap-4"
        name='contact'
        method='POST'
        data-netlify="true"
        onSubmit={handleSubmit}
        >

        {/* hidden input required for netlify form */}
        <input type="hidden" name="form-name" value="contact" />

          <input 
            type="text"
            name='fullName'
            required
            placeholder="Full Name" 
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="email"
            name='email'
            required
            placeholder="Email Address" 
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="tel"
            name='phone' 
            placeholder="Phone Number" 
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name='message'
            required 
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

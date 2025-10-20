import React from 'react'
import NavBar from '../Components/navBar'
import Footer from '../Components/footer'
import { GiTeacher } from 'react-icons/gi'
import { FaBriefcase, FaGraduationCap, FaLaptopCode, FaLightbulb } from 'react-icons/fa'
import { IoEarthSharp } from 'react-icons/io5'
import { HiSpeakerphone } from 'react-icons/hi'


function OurServices() {

  const ourServices = [
      {
          icon: <GiTeacher className="text-4xl text-blue-500 mb-4"/>,
          service: "Facilitation Program / Flagship Service",
          description: "Connecting students and graduates with industries  through field attachments, internships, mentorship,  and career readiness programs"
      }, 
      {
          icon: <FaGraduationCap className="text-4xl text-blue-500 mb-4"/>,
          service: "Training & Certification Programs",
          description: "Short, practical courses in digital skills, project  management, customer care, entrepreneurship, and  leadership. Corporate training tailored to workforce  needs. Partnerships with international certification  bodies to deliver recognized qualifications"
      }, 
      {
          icon: <FaLightbulb className="text-4xl text-blue-500 mb-4"/>,
          service: "CSR Consulting & Advisory",
          description: " Helping corporates design and implement high-impact  CSR initiatives that address youth employment, skills  development, and community empowerment. Includes  CSR strategy development, program design, and  employer branding initiatives"
      }, 
      {
          icon: <FaBriefcase className="text-4xl text-blue-500 mb-4"/>,
          service: "SME Support Packages",
          description: " Empowering SMEs with business solutions: strategy,  operations, financial management, marketing,  branding, digital transformation, and linkages to  funding opportunities"
      }, 
      {
          icon: <IoEarthSharp className="text-4xl text-blue-500 mb-4"/>,
          service: "Study Abroad & Exchange Programs",
          description: " Facilitating global exposure for students and  professionals through study abroad placements,  international internships, and university partnerships."
      }, 
      {
          icon: <FaLaptopCode className="text-4xl text-blue-500 mb-4"/>,
          service: "Technology & Digital Solutions",
          description: "Developing innovative platforms like job portals,  e-learning, ERP systems, and digital ID solutions for  students and institutions"
      }, 
      {
          icon: <HiSpeakerphone className="text-4xl text-blue-500 mb-4"/>,
          service: "Marketing, Communications & Media",
          description: "Providing solutions in PR, strategic CSR planning, media strategy, content creation, and confidential executive communications."
      }, 
  ]

  return (
    <>
      <NavBar/>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className='text-2xl sm:text-4xl font-bold text-center mb-10'>Our Services</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            { ourServices.map((item, index) => (
                <div
                  key={index}
                  className='bg-secondary p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center'
                >
                    <div>{item.icon}</div>
                    <div className="font-semibold text-lg mb-2">{item.service}</div>
                    <div className="text-gray-700 text-sm sm:text-base">{item.description}</div>
                </div>
            )) }
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default OurServices

import { Link } from "react-router-dom"
import HeroCarousel from "../components/HeroCarousal.jsx"
import { useState } from "react"

export default function Home() {

  const [whyus,_] = useState( [
      {
        icon: '<svg>...</svg>', // Replace with actual SVG code
        title: 'End-To-End Solutions',
        description: 'An end-to-end solution covers all stages from planning, recruitment, deployment, and maintenance, ensuring a seamless and fully integrated experience to meet the diverse needs of both clients and candidates.'
      },
      {
        icon: '<svg>...</svg>', // Replace with actual SVG code
        title: 'Expert Talent Pool',
        description: 'We connect you with top-tier talent from diverse industries, ensuring you have access to highly qualified candidates that match your company culture and specific requirements.'
      },
      {
        icon: '<svg>...</svg>', // Replace with actual SVG code
        title: 'Customizable Recruitment Plans',
        description: 'Tailor your hiring process to suit your specific business needs with our flexible recruitment plans, providing you with the best solutions to attract the right talent quickly and efficiently.'
      },
      {
        icon: '<svg>...</svg>', // Replace with actual SVG code
        title: 'Industry Expertise',
        description: 'Our deep industry knowledge allows us to understand the unique challenges of your business, enabling us to provide bespoke HR solutions that align with your goals and objectives.'
      },
      {
        icon: '<svg>...</svg>', // Replace with actual SVG code
        title: 'On-Demand Support',
        description: 'Whether you need immediate assistance or long-term consulting, our dedicated team is available to provide expert HR support whenever you need it, ensuring your operations run smoothly.'
      },
      {
        icon: '<svg>...</svg>', // Replace with actual SVG code
        title: 'Diversity & Inclusion',
        description: 'We are committed to fostering diverse, inclusive work environments. Our recruitment strategies prioritize diversity, helping you build a workforce that reflects the varied perspectives of the world.'
      }
    ]  
  )
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Services Section */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <h2 className="text-5xl font-bold text-blue-900 mb-8 md:mb-10">Service We Provide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Recruitment", image: "/recruitment.png", link: "/services/recruitment" },
            {
              title: "Healthcare Hiring",
              image:  "/healthcare.png",
              link: "/services/healthcare-hiring",
            },
            {
              title: "Medical Coding",
              image: "/medicalCoding.png",
              link: "/services/medical-coding",
            },
            {
              title: "Entire Recruitment",
              image: "/entireRecruitment.jpg",
              link: "/services/entire-recruitment",
            },
          ].map((service, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm group relative">
              <img src={service.image ||  "/healthcare.png"} alt={service.title} className="w-full h-40 object-cover" />
              <div className="p-4 text-center font-medium">{service.title}</div>
              <div className="absolute inset-x-0 bottom-0 h-0 bg-blue-900 text-white text-center overflow-hidden group-hover:h-8 transition-all duration-300 flex items-center justify-center">
                <Link to={service.link} className="w-full h-full flex items-center justify-center">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img src="/gennext.png" alt="GE Next Recruiters Logo" width="200px" height="200px"  />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-5xl font-bold text-blue-900 mb-6">About us</h2>
            <p className="text-gray-700 leading-relaxed">
              At GE NEXT RECRUITERS, we are dedicated to bridging the gap between talent and opportunity. With a focus
              on personalized recruitment solutions, we help businesses find the right candidates and empower
              individuals to achieve their career goals. Our experienced team combines industry insights with a
              people-first approach to create successful, lasting partnerships. Whether you're hiring or job-seeking,
              we're here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <h2 className="text-2xl sm:text-5xl font-bold text-blue-900 mb-8 md:mb-10">Why us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...whyus].map((_, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="red"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </div>
                <h3 className="ml-3 font-semibold text-lg">{_.title}</h3>
              </div>
              <p className="text-sm text-gray-600">
                {_.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}


import { Link } from "react-router-dom"

export default function EntireRecruitment() {
  const otherServices = [
    {
      title: "Recruitment",
      image: "/recruitment.png",
      link: "/services/recruitment",
    },
    {
      title: "Healthcare Hiring",
      image: "/healthcare.png",
      link: "/services/healthcare-hiring",
    },
    {
      title: "Medical Coding",
      image: "/medicalCoding.png",
      link: "/services/medical-coding",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Service / Entire Recruitment</h1>

          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Entire Recruitment service offers a comprehensive end-to-end recruitment solution for businesses of
              all sizes. We handle every aspect of the hiring process, from job posting to onboarding, allowing you to
              focus on your core business activities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With our Entire Recruitment service, you get a dedicated team of recruitment specialists who work as an
              extension of your HR department. We provide a seamless experience and ensure that all your staffing needs
              are met efficiently and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <img
                src="/entireRecruitment.jpg"
                alt="Entire recruitment process"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Complete Recruitment Solution</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Entire Recruitment service covers all aspects of the hiring process, including: job analysis and
                description creation, candidate sourcing, screening and assessment, interview coordination, offer
                negotiation, and onboarding support.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We work closely with your team to understand your company culture and specific requirements, ensuring
                that we find candidates who not only have the right skills but also fit well with your organization. Our
                goal is to make the recruitment process as smooth and efficient as possible.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mb-8">Other Service We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((service, index) => (
              <Link to={service.link} key={index} className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={service.image || "/recruitment.png"}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center font-medium group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


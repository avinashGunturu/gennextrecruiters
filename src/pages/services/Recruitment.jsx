import { Link } from "react-router-dom"

export default function Recruitment() {
  const otherServices = [
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
    {
      title: "Entire Recruitment",
      image: "/entireRecruitment.jpg",
      link: "/services/entire-recruitment",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Service / Recruitment</h1>

          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Our recruitment services are designed to help businesses find the right talent for their specific needs.
              We work closely with our clients to understand their requirements and provide tailored recruitment
              solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With our extensive network and industry expertise, we can connect you with qualified candidates who match
              your company culture and job requirements. Our goal is to streamline your hiring process and ensure
              successful placements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <img src="/recruitment.png" alt="Recruitment process" className="w-full h-auto rounded-lg object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Our Recruitment Process</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our recruitment process is thorough and efficient. We begin by understanding your company's needs and
                culture, then search for candidates who not only have the required skills but also fit well with your
                organization.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We handle everything from initial screening to final interviews, making the hiring process seamless for
                both employers and candidates. Our personalized approach ensures that we find the right match for your
                specific requirements.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mb-8">Other Service We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((service, index) => (
              <Link to={service.link} key={index} className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={service.image || "/placeholder.svg"}
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


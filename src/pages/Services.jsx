import { Link } from "react-router-dom"

export default function Services() {
  const services = [
    {
      title: "Recruitment",
      image: "/recruitment.png",
      link: "/services/recruitment",
      description: "Our recruitment services help companies find the right talent for their needs.",
    },
    {
      title: "Healthcare Hiring",
      image: "/healthcare.png",
      link: "/services/healthcare-hiring",
      description: "Specialized hiring services for healthcare organizations and medical facilities.",
    },
    {
      title: "Medical Coding",
      image: "/medicalCoding.png",
      link: "/services/medical-coding",
      description: "Expert medical coding professionals for healthcare organizations and hospitals.",
    },
    {
      title: "Entire Recruitment",
      image: "/entireRecruitment.jpg",
      link: "/services/entire-recruitment",
      description: "End-to-end recruitment solutions for businesses of all sizes.",
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Services</h1>
          <p className="text-center max-w-2xl mx-auto mb-12">
            We offer a comprehensive range of recruitment and staffing services tailored to meet your specific needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link to={service.link} key={index} className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                  <div className="bg-blue-900 text-white text-center py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
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
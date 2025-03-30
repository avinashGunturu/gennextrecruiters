import { Link } from "react-router-dom"

export default function MedicalCoding() {
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
      title: "Entire Recruitment",
      image: "/entireRecruitment.jpg",
      link: "/services/entire-recruitment",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Service / Medical Coading</h1>

          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Looking for top medical coding talent for your organization? We specialize in connecting skilled medical
              coding professionals with corporate clients. Reach out to us today and let's find the perfect candidates
              for your needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Looking for top medical coding talent for your organization? We specialize in connecting skilled medical
              coding professionals with corporate clients. Reach out to us today and let's find the perfect candidates
              for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <img
                src="/medicalCoding.png"
                alt="Medical coding professionals"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Steps to Get You Good Medical Coading Expert</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Looking for top medical coding talent for your organization? We specialize in connecting skilled medical
                coding professionals with corporate clients. Reach out to us today and let's find the perfect candidates
                for your needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Looking for top medical coding talent for your organization? We specialize in connecting skilled medical
                coding professionals with corporate clients. Reach out to us today and let's find the perfect candidates
                for your needs.
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


import { Link } from "react-router-dom"

export default function HealthcareHiring() {
  const otherServices = [
    {
      title: "Recruitment",
      image: "/recruitment.png",
      link: "/services/recruitment",
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
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Service / Healthcare Hiring</h1>

          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Looking for top healthcare professionals for your organization? We specialize in connecting skilled
              healthcare professionals with medical facilities and healthcare organizations. Reach out to us today and
              let's find the perfect candidates for your needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our healthcare hiring services are designed to meet the unique staffing needs of hospitals, clinics, and
              other healthcare facilities. We understand the importance of finding qualified professionals who can
              provide quality care to patients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <img
                src="/healthcare.png"
                alt="Healthcare professionals"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Steps to Get Healthcare Professionals</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Looking for top healthcare talent for your organization? We specialize in connecting skilled healthcare
                professionals with medical facilities. Reach out to us today and let's find the perfect candidates for
                your needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our extensive network of healthcare professionals includes nurses, physicians, medical assistants, and
                administrative staff. We carefully screen all candidates to ensure they meet your specific requirements
                and standards.
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


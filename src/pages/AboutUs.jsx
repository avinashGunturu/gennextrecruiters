export default function AboutUs() {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Top Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <img src="/aboutus.png" alt="Team working together" className="w-full h-auto rounded-lg object-cover" />
            </div>
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold text-blue-900 mb-6">About Our Company</h1>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are a specialized recruitment agency focused on hiring skilled medical coding professionals for
                corporate clients. With a deep understanding of the healthcare industry, we connect organizations with
                top-tier talent to meet their staffing needs. Our mission is to simplify the hiring process and provide
                companies with qualified candidates who add value from day one.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Backed by years of experience and a dedicated team, we ensure that every placement is a perfect fit for
                both the employer and the candidate. We pride ourselves on building lasting relationships, offering
                personalized solutions, and delivering results with speed and efficiency.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you are looking to scale your team or fill critical roles, we are here to support your recruitment
                goals. Partner with us and experience a seamless, reliable, and results-driven hiring process tailored to
                your needs.
              </p>
            </div>
          </div>
        </section>
  
        {/* Bottom Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">About Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are a specialized recruitment agency focused on hiring skilled medical coding professionals for
                corporate clients. With a deep understanding of the healthcare industry, we connect organizations with
                top-tier talent to meet their staffing needs. Our mission is to simplify the hiring process and provide
                companies with qualified candidates who add value from day one.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Backed by years of experience and a dedicated team, we ensure that every placement is a perfect fit for
                both the employer and the candidate. We pride ourselves on building lasting relationships, offering
                personalized solutions, and delivering results with speed and efficiency.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you are looking to scale your team or fill critical roles, we are here to support your recruitment
                goals. Partner with us and experience a seamless, reliable, and results-driven hiring process tailored to
                your needs.
              </p>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img src="/aboutus.png" alt="Team collaboration" className="w-full h-auto rounded-lg object-cover" />
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Contact Us</h1>
          <p className="text-center max-w-2xl mx-auto mb-12">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to
            reach out. Your message matters to us!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 flex flex-col items-center text-center">
                <div className="text-red-500 mb-4">
                  <MapPin size={32} />
                </div>
                <h3 className="font-semibold mb-2">Head Office</h3>
                <p className="text-gray-600">
                  500032, gowlidoddy,gachibowli
                  <br />
                  hyderabad
                </p>
              </div>

              <div className="border rounded-lg p-6 flex flex-col items-center text-center">
                <div className="text-red-500 mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="font-semibold mb-2">Mobile Number</h3>
                <p className="text-gray-600">
                  +91 9381365400
                  <br />
                  Available 24/7
                </p>
              </div>

              <div className="border rounded-lg p-6 flex flex-col items-center text-center">
                <div className="text-red-500 mb-4">
                  <Mail size={32} />
                </div>
                <h3 className="font-semibold mb-2">Email Address</h3>
                <p className="text-gray-600">
                  avinashgunturu.devi@gmail.com
                  <br />
                  Available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">  
           {/* Contact Form */}
           <div className="border rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
        </div>
      </section>
    </div>
  )
}


"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselItems = [
    {
      title: "Partnering with You for",
      subtitle: "Your HR Success Story",
      image: "/banner1.png",
      buttonText: "Contact Us",
      buttonLink: "/contact-us",
    },
    {
      title: "Find the Perfect Talent",
      subtitle: "For Your Organization",
      image:"/banner2.jpg",
      buttonText: "Our Services",
      buttonLink: "/services",
    },
    {
      title: "Specialized Recruitment",
      subtitle: "For Healthcare Industry",
      image:"/banner3.jpg",
      buttonText: "Learn More",
      buttonLink: "/about-us",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [carouselItems.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <section className="relative bg-gray-800 text-white h-[500px] md:h-[600px]">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 z-0">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-4 z-10 relative h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {item.title}
              <br />
              {item.subtitle}
            </h1>
            <div className="mt-8">
              <Link
                to={item.buttonLink}
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-2 rounded inline-block transition-colors"
              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 cursor-pointer transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full z-20 hover:bg-opacity-70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 cursor-pointer transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full z-20 hover:bg-opacity-70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"}`}
          />
        ))}
      </div>
    </section>
  )
}


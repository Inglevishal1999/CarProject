import React, { useState, useEffect } from "react";
import img1 from "/src/assets/HomePage/Car logos/photo-1592046285097-6cdf4daf0d69.avif";
import { Star } from "lucide-react";

// Hook to detect screen width
const useResponsiveSlides = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? 1 : 2;
};

const ClientSay = () => {
  const testimonials = [
    {
      name: "Charlie Johnson",
      location: "From New York, US",
      rating: 5.0,
      review:
        "I feel very secure when using caretall’s services. Your customer care team is very enthusiastic and the driver is always on time.",
      image: img1,
    },
    {
      name: "Emily Davis",
      location: "From Texas, US",
      rating: 4.9,
      review: "Great service, would definitely recommend to my friends!",
      image: img1,
    },
    {
      name: "Michael Smith",
      location: "From California, US",
      rating: 5.0,
      review: "Amazing experience, very reliable and friendly drivers!",
      image: img1,
    },
    {
      name: "Sarah Williams",
      location: "From Florida, US",
      rating: 4.8,
      review: "Smooth booking and prompt service, loved it!",
      image: img1,
    },
    {
      name: "James Brown",
      location: "From Washington, US",
      rating: 5.0,
      review: "Couldn’t ask for better service. Highly recommend!",
      image: img1,
    },
    {
      name: "James Mine",
      location: "From Washington, USA",
      rating: 4.5,
      review: "Couldn’t ask for better service. Highly recommend!",
      image: img1,
    },
  ];

  const itemsPerSlide = useResponsiveSlides();

  // Create slides dynamically based on items per slide
  const slideCount = Math.ceil(testimonials.length / itemsPerSlide);
  const slides = Array.from({ length: slideCount }, (_, i) =>
    testimonials.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide)
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="overflow-hidden w-full max-w-8xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="relative w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((group, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col md:flex-row gap-6 justify-center px-4"
              style={{ width: `${100 / slides.length}%` }}
            >
              {group.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row p-6 gap-6 max-w-xl w-full"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full md:w-40 h-44 object-cover rounded-xl"
                  />
                  <div>
                    <div className="text-2xl font-semibold">
                      {testimonial.rating.toFixed(1)}{" "}
                      <span className="text-base font-normal">stars</span>
                    </div>
                    <div className="flex text-yellow-400 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      “{testimonial.review}”
                    </p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSay;

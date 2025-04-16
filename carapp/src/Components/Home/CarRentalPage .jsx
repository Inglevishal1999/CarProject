import React, { useEffect, useState, useRef } from "react";
import logoslider1 from "../../assets/HomePage/Car logos/honda.png";
import logoslider2 from "../../assets/HomePage/Car logos/jaguar.png";
import logoslider3 from "../../assets/HomePage/Car logos/nissan.png";
import logoslider4 from "../../assets/HomePage/Car logos/volvo.png";
import logoslider5 from "../../assets/HomePage/Car logos/porsche.png";
import logoslider6 from "../../assets/HomePage/Car logos/acura.png";

// Step images
import step1 from "../../assets/HomePage/Car logos/three cards/shopping.png";
import step2 from "../../assets/HomePage/Car logos/three cards/location.png";
import step3 from "../../assets/HomePage/Car logos/three cards/Book Car.png";

const logos = [
  {
    id: 1,
    img: logoslider1,
    name: "Honda",
  },
  {
    id: 2,
    img: logoslider2,
    name: "Jaguar",
  },
  {
    id: 3,
    img: logoslider3,
    name: "Nissan",
  },
  {
    id: 4,
    img: logoslider4,
    name: "Volvo",
  },
  {
    id: 5,
    img: logoslider5,
    name: "Porsche",
  },
  {
    id: 6,
    img: logoslider6,
    name: "Acura",
  },
];

const CarRentalPage = () => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;
    let startTime = null;

    const scroll = (timestamp) => {
      if (!startTime) startTime = timestamp;

      if (isHovered) {
        animationId = requestAnimationFrame(scroll);
        return;
      }

      const elapsed = timestamp - startTime;
      const scrollAmount = (elapsed / 50) % (slider.scrollWidth / 2);
      slider.scrollLeft = scrollAmount;

      if (scrollAmount >= slider.scrollWidth / 2 - 10) {
        startTime = timestamp;
        slider.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  const allLogos = [...logos, ...logos]; // Duplicate logos for loop

  return (
    <>
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-6 py-2 rounded-lg mb-6">
            HOW IT WORK
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Rent with the following 3 working steps
          </h1>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-50 p-6 rounded-lg mb-6 w-[90px] h-[80px] flex items-center justify-center">
              <img src={step1} alt="img1" className="w-20 h-10" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Choose location
            </h2>
            <p className="text-center text-gray-600">
              Choose your area and find your best car
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-50 p-6 rounded-lg mb-6 w-[90px] h-[80px] flex items-center justify-center">
              <img src={step2} alt="img1" className="w-20 h-10" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Pick-up date
            </h2>
            <p className="text-center text-gray-600">
              Select your pick-up date and time to book your car
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-50 p-6 rounded-lg mb-6 w-[120px] h-[80px] flex items-center justify-center">
              <img src={step3} alt="img1" className="w-28 h-10" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Book your car
            </h2>
            <p className="text-center text-gray-600">
              Book your car and we will deliver it directly to you
            </p>
          </div>
        </div>
      </div>

      {/* Car Brands Slider */}
      <div className="md:mt-10 w-full overflow-hidden">
        <div className="relative max-w-full mx-auto px-4">
          <div
            ref={sliderRef}
            className="flex overflow-x-scroll scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex space-x-4 py-4 items-center">
              {allLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={logo.img}
                    alt={logo.name}
                    className="mix-blend-multiply md:w-60 w-20 md:h-32 h-16 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarRentalPage;

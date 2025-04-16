import React from "react";
import img1 from "/src/assets/HomePage/Car logos/view-3d-car (2).jpg";
import img2 from "/src/assets/HomePage/Car logos/view-3d-car.jpg";
import { useNavigate } from "react-router-dom";

const PopularRentalDeals = () => {
  const navigate = useNavigate();

  const carDealsection = [
    {
      id: 1,
      name: "Jaguar XE L P250",
      image: img1,
      rating: 4.8,
      reviews: 2435,
      passengers: 4,
      transmission: "Auto",
      airConditioning: true,
      doors: 4,
      price: 1800,
    },
    {
      id: 2,
      name: "Audi R8",
      image: img2,
      rating: 4.6,
      reviews: 1936,
      passengers: 2,
      transmission: "Auto",
      airConditioning: true,
      doors: 2,
      price: 2100,
    },
    {
      id: 3,
      name: "BMW M3",
      image: img1,
      rating: 4.5,
      reviews: 2036,
      passengers: 4,
      transmission: "Auto",
      airConditioning: true,
      doors: 4,
      price: 1600,
    },
    {
      id: 4,
      name: "Lamborghini Huracan",
      image: img2,
      rating: 4.7,
      reviews: 2239,
      passengers: 2,
      transmission: "Auto",
      airConditioning: true,
      doors: 2,
      price: 2300,
    },
  ];

  const featuredCars = carDealsection.slice(0, 4);

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-lg mb-4">
            POPULAR RENTAL DEALS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Most popular cars rental deals
          </h2>
        </div>

        {/* Car Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-lg flex flex-col h-full relative z-0"
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mt-4">{car.name}</h3>
                <div className="flex items-center mt-1">
                  <div className="flex text-yellow-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                  <span className="ml-1 text-sm font-medium">{car.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">
                    ({car.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 text-sm text-gray-600">
                  <div className="flex items-center">🚗 {car.passengers} Passengers</div>
                  <div className="flex items-center">⚙️ {car.transmission}</div>
                  <div className="flex items-center">
                    ❄️ {car.airConditioning ? "Air Conditioning" : "No AC"}
                  </div>
                  <div className="flex items-center">🚪 {car.doors} Doors</div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="text-lg font-bold">
                      ${car.price.toLocaleString()}{" "}
                      <span className="text-sm text-gray-500">/day</span>
                    </p>
                  </div>
                  <button
                    onClick={() => navigate(`/car-detail/${car.id}`)} // navigate to car detail page with car id
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center z-10"
                  >
                    Rent Now
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Vehicles Button */}
        <div className="mt-12  w-full">
          <button
            onClick={() => navigate("/all-vehicles")}
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Show all vehicles
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularRentalDeals;

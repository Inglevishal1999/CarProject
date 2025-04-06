import React from 'react';
import img1 from "/src/assets/HomePage/Car logos/view-3d-car (2).jpg";
import img2 from "/src/assets/HomePage/Car logos/view-3d-car.jpg"

const PopularRentalDeals = () => {
  // Car data array
  const carDeals = [
    {
      id: 1,
      name: 'Jaguar XE L P250',
      image: img1,
      rating: 4.8,
      reviews: 2435,
      passengers: 4,
      transmission: 'Auto',
      airConditioning: true,
      doors: 4,
      price: 1800
    },
    {
      id: 2,
      name: 'Audi R8',
      image: img2,
      rating: 4.6,
      reviews: 1936,
      passengers: 2,
      transmission: 'Auto',
      airConditioning: true,
      doors: 2,
      price: 2100
    },
    {
      id: 3,
      name: 'BMW M3',
      image: img1,
      rating: 4.5,
      reviews: 2036,
      passengers: 4,
      transmission: 'Auto',
      airConditioning: true,
      doors: 4,
      price: 1600
    },
    {
      id: 4,
      name: 'Lamborghini Huracan',
      image: img2,
      reviews: 2239,
      passengers: 2,
      transmission: 'Auto',
      airConditioning: true,
      doors: 2,
      price: 2300
    }
  ];

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-lg mb-4">
            POPULAR RENTAL DEALS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Most popular cars rental deals
          </h2>
        </div>

        {/* Car Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {carDeals.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-auto object-cover"
                />
                <h3 className="text-lg font-semibold mt-4">{car.name}</h3>
                <div className="flex items-center mt-1">
                  <div className="flex text-yellow-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  </div>
                  <span className="ml-1 text-sm font-medium">{car.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">({car.reviews.toLocaleString()} reviews)</span>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                    </svg>
                    {car.passengers} Passengers
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                    </svg>
                    {car.transmission}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"/>
                      <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 010 2h-2v-2z"/>
                    </svg>
                    Air Conditioning
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 2H8.828a2 2 0 00-1.414.586L6.293 3.707A1 1 0 015.586 4H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                    </svg>
                    {car.doors} Doors
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="text-lg font-bold">${car.price.toLocaleString()} <span className="text-sm text-gray-500">/day</span></p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
                    Rent Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "Show all vehicles" button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Show all vehicles
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularRentalDeals;
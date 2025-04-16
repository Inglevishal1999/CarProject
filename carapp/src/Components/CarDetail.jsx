import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import img1 from "/src/assets/HomePage/Car logos/view-3d-car (2).jpg";
import img2 from "/src/assets/HomePage/Car logos/view-3d-car.jpg";

const CarDetail = () => {
  const { id } = useParams(); // Get car ID from URL
  const navigate = useNavigate(); // Add navigate for redirection if needed
  const [car, setCar] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  // Sample car data - using the same structure as in PopularRentalDeals
  const carDealsection = [
    {
      id: 1,
      name: "Jaguar XE L P250",
      images: [img1, img2],
      rating: 4.8,
      reviews: 2435,
      passengers: 4,
      transmission: "Auto",
      airConditioning: true,
      doors: 4,
      price: 1800,
      year: 2023,
      fuelType: "Gasoline",
      mileage: "Unlimited",
    },
    {
      id: 2,
      name: "Audi R8",
      images: [img2, img1],
      rating: 4.6,
      reviews: 1936,
      passengers: 2,
      transmission: "Auto",
      airConditioning: true,
      doors: 2,
      price: 2100,
      year: 2022,
      fuelType: "Gasoline",
      mileage: "250 miles/day",
    },
    {
      id: 3,
      name: "BMW M3",
      images: [img1, img2],
      rating: 4.5,
      reviews: 2036,
      passengers: 4,
      transmission: "Auto",
      airConditioning: true,
      doors: 4,
      price: 1600,
      year: 2022,
      fuelType: "Gasoline",
      mileage: "Unlimited",
    },
    {
      id: 4,
      name: "Lamborghini Huracan",
      images: [img2, img1],
      rating: 4.7,
      reviews: 2239,
      passengers: 2,
      transmission: "Auto",
      airConditioning: true,
      doors: 2,
      price: 2300,
      year: 2023,
      fuelType: "Gasoline",
      mileage: "200 miles/day",
    },
  ];

  useEffect(() => {
    // Find the car with matching ID
    const carDetail = carDealsection.find((car) => car.id === parseInt(id));
    setCar(carDetail);
    
    // If car not found, redirect to home
    if (!carDetail) {
      // Set a slight delay to avoid immediate redirect during component mount
      const timer = setTimeout(() => {
        navigate('/');
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [id, navigate]);

  if (!car) return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-700">Loading...</p>
      </div>
    </div>
  );

  // Function to change the selected image
  const handleImageChange = (index) => {
    setSelectedImage(index);
  };

  // Handle rent now button click
  const handleRentNow = () => {
    // Navigate to booking page or show booking modal
    // For now, we'll just log the action
    console.log(`Renting ${car.name} for $${car.price}/day`);
    // You can replace this with actual navigation:
    // navigate(`/booking/${car.id}`);
  };

  return (
    <div className="w-full py-8 px-4 bg-gray-50">
      <div className="max-w-8xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-50 py-4 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-800">{car.name}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Car Images Section */}
            <div>
              <div className="w-full h-[450px] overflow-hidden rounded-lg mb-4">
                <img 
                  src={car.images ? car.images[selectedImage] : car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails for multiple images */}
              {car.images && (
                <div className="flex space-x-2 mt-2">
                  {car.images.map((img, index) => (
                    <div 
                      key={index} 
                      onClick={() => handleImageChange(index)}
                      className={`w-20 h-16 rounded cursor-pointer border-2 ${
                        selectedImage === index ? 'border-blue-600' : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${car.name} view ${index+1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Car Details Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{car.name}</h2>
              
              {/* Rating */}
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>
                <span className="ml-1 text-sm font-medium">{car.rating}</span>
                <span className="ml-1 text-sm text-gray-500">
                  ({car.reviews.toLocaleString()} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="text-2xl font-bold text-gray-800">
                      ${car.price.toLocaleString()}{" "}
                      <span className="text-sm text-gray-500">/day</span>
                    </p>
                  </div>
                  <button 
                    onClick={handleRentNow}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
                  >
                    Rent Now
                  </button>
                </div>
              </div>

              {/* Car Features */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Vehicle Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-700">
                    <span className="mr-2">🚗</span>
                    {car.passengers} Passengers
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="mr-2">⚙️</span>
                    {car.transmission}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="mr-2">❄️</span>
                    {car.airConditioning ? "Air Conditioning" : "No AC"}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="mr-2">🚪</span>
                    {car.doors} Doors
                  </div>
                  {car.year && (
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">📅</span>
                      {car.year}
                    </div>
                  )}
                  {car.fuelType && (
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">⛽</span>
                      {car.fuelType}
                    </div>
                  )}
                  {car.mileage && (
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">🛣️</span>
                      {car.mileage}
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-600">
                  Experience luxury and performance with the {car.name}. This {car.year} model 
                  offers exceptional comfort with {car.passengers} passenger seating, 
                  {car.airConditioning ? " air conditioning" : ""}, and {car.transmission} transmission.
                  Perfect for both business trips and leisure travel.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Rental Terms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">What's included</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Comprehensive insurance</li>
                <li>24/7 roadside assistance</li>
                <li>{car.mileage || "Unlimited mileage"}</li>
                <li>Free cancellation up to 48 hours before pickup</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Requirements</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Valid driver's license</li>
                <li>Minimum age: 25 years</li>
                <li>Credit card required for deposit</li>
                <li>License held for minimum of 2 years</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back to Cars Button
        <div className="mt-12 flex justify-center">
          <Link 
            to="/cars"
            className="mr-4 inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Cars
          </Link>
          
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Return Home
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default CarDetail;
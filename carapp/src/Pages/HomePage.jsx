import React, { useState, useEffect } from "react";
import { Search, Calendar, MapPin, Filter, Loader } from "lucide-react";
import Banner from "../../src/assets/HomePage/Car logos/Leanding page logo/best-car-rental-app-banner.png";
import CarRentalPage from "../Components/Home/CarRentalPage ";
import WhyChooseUsSection from "../Components/Home/WhyChooseUsSection";
import PopularRentalDeals from "../Components/Home/PopularRentalDeals";
import ClientSay from "../Components/Home/ClientSay";
import google from "../../src/assets/HomePage/Car logos/Leanding page logo/Google.jpg";
import AppStore from "../../src/assets/HomePage/Car logos/Leanding page logo/AppStore.jpg";

const HomePage = () => {
  // Main form data state
  const [formData, setFormData] = useState({
    inputSearch: "",
    pickupDate: "",
    returnDate: "",
    carType: "all",
    priceRange: [0, 500], // Default price range in $
  });
  
  // UI states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [currentStep, setCurrentStep] = useState('search'); // search, results, vehicle, payment, confirmation
  
  // Location suggestion state
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Reset success message after 3 seconds
  useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [success]);

  // Simulated location suggestions
  const fetchLocationSuggestions = (query) => {
    // In a real app, this would call a geocoding API like Google Places
    const mockSuggestions = [
      { id: 1, name: "New York City Center", address: "Manhattan, NY", lat: 40.7128, lng: -74.0060 },
      { id: 2, name: "New York JFK Airport", address: "Queens, NY", lat: 40.6413, lng: -73.7781 },
      { id: 3, name: "Newark Liberty Airport", address: "Newark, NJ", lat: 40.6895, lng: -74.1745 },
      { id: 4, name: "New York LaGuardia Airport", address: "Queens, NY", lat: 40.7769, lng: -73.8740 },
    ];
    
    // Filter suggestions based on query
    return mockSuggestions.filter(
      loc => loc.name.toLowerCase().includes(query.toLowerCase()) || 
             loc.address.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // If location input changes, show location suggestions
    if (name === 'inputSearch' && value.length > 2) {
      const suggestions = fetchLocationSuggestions(value);
      setLocationSuggestions(suggestions);
      setShowSuggestions(true);
    } else if (name === 'inputSearch') {
      setShowSuggestions(false);
    }
  };
  
  const handleLocationSelect = (location) => {
    setFormData(prev => ({
      ...prev,
      inputSearch: location.name,
      // Store location coordinates for backend search
      latitude: location.lat,
      longitude: location.lng
    }));
    setShowSuggestions(false);
  };

  const validateForm = () => {
    const errors = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (!formData.inputSearch) {
      errors.location = "Location is required";
    }
    
    if (!formData.pickupDate) {
      errors.pickupDate = "Pickup date is required";
    } else {
      const pickupDate = new Date(formData.pickupDate);
      if (pickupDate < today) {
        errors.pickupDate = "Pickup date cannot be in the past";
      }
    }
    
    if (!formData.returnDate) {
      errors.returnDate = "Return date is required";
    } else if (formData.pickupDate) {
      const pickupDate = new Date(formData.pickupDate);
      const returnDate = new Date(formData.returnDate);
      if (returnDate < pickupDate) {
        errors.returnDate = "Return date must be after pickup date";
      }
    }
    
    return errors;
  };

  const handleSubmit = async () => {
    try {
      // Validate form
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
        setError(Object.values(validationErrors)[0]);
        return;
      }
      
      setLoading(true);
      setError(null);
      
      // Format data for API
      const searchParams = {
        location: formData.inputSearch,
        latitude: formData.latitude,
        longitude: formData.longitude,
        pickupDate: new Date(formData.pickupDate).toISOString(),
        returnDate: new Date(formData.returnDate).toISOString(),
        carType: formData.carType,
        priceRange: formData.priceRange,
        timestamp: new Date().toISOString()
      };
      
      console.log("Searching with params:", searchParams);
      
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock search results - in a real app, this would come from your API
      const mockResults = [
        {
          id: 1,
          make: "Toyota",
          model: "Corolla",
          year: 2023,
          type: "Economy",
          seats: 5,
          transmission: "Automatic",
          pricePerDay: 55,
          rating: 4.8,
          features: ["Air Conditioning", "Bluetooth", "Backup Camera"],
          image: "https://placeholder.com/toyota-corolla"
        },
        {
          id: 2,
          make: "Honda",
          model: "Civic",
          year: 2022,
          type: "Economy",
          seats: 5,
          transmission: "Automatic",
          pricePerDay: 58,
          rating: 4.7,
          features: ["Air Conditioning", "Bluetooth", "Apple CarPlay"],
          image: "https://placeholder.com/honda-civic"
        },
        {
          id: 3,
          make: "Ford",
          model: "Mustang",
          year: 2023,
          type: "Sports",
          seats: 4,
          transmission: "Automatic",
          pricePerDay: 110,
          rating: 4.9,
          features: ["Convertible", "Premium Sound", "Leather Seats"],
          image: "https://placeholder.com/ford-mustang"
        }
      ];
      
      setSearchResults(mockResults);
      setShowResults(true);
      setCurrentStep('results');
      setSuccess(true);
      
    } catch (err) {
      setError(err.message || "Failed to search for vehicles");
      console.error("Error searching:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setShowResults(false);
    setCurrentStep('search');
  };

  const inputFields = [
    {
      label: "Location",
      placeholder: "Search your pickup location",
      type: "text",
      name: "inputSearch",
      icon: MapPin,
      required: true,
    },
    {
      label: "Pickup date",
      type: "date",
      name: "pickupDate",
      icon: Calendar,
      required: true,
    },
    {
      label: "Return date",
      type: "date",
      name: "returnDate",
      icon: Calendar,
      required: true,
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen overflow-hidden relative">
      {/* Background design element */}
      <div className="absolute right-0 top-0 w-full md:w-2/3 h-full z-0"></div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Only show hero when not showing results */}
        {!showResults && (
          <div className="flex flex-col-reverse md:flex-row items-center mt-8 md:mt-4">
            {/* Left column */}
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                Find, book and rent a car{" "}
                <span className="text-blue-500">Easily</span>
              </h1>
              <p className="text-gray-600 mb-8">
                Get a car wherever and whenever you need it with your iOS and
                Android device.
              </p>

              {/* App store buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <img src={google} alt="" className="w-28 h-10" />
                <img src={AppStore} alt="" className="w-32 h-11 mix-blend-multiply" />
              </div>
            </div>

            {/* Right column - Car image */}
            <div className="w-full md:w-1/2 mt-8 md:mt-10">
              <img
                src={Banner}
                alt="Blue sports car"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}

        {/* Search form */}
        <div className="bg-white rounded-lg shadow-lg p-4 mt-8 mb-12 relative">
          {/* Error message */}
          {error && (
            <div className="absolute -top-12 left-0 right-0 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          
          {/* Search form header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {currentStep === 'search' ? '' : 
               currentStep === 'results' ? 'Available Vehicles' : 'Vehicle Details'}
            </h2>
            
            {/* Back button when showing results */}
            {showResults && (
              <button
                onClick={handleReset}
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                <span className="ml-1">New Search</span>
              </button>
            )}
          </div>
          
          {/* Main search form */}
          {!showResults && (
            <div className="flex flex-col md:flex-row">
              {inputFields.map((field, index) => (
                <div
                  key={index}
                  className={`flex items-center p-3 ${
                    index < inputFields.length - 1
                      ? "border-b md:border-b-0 md:border-r"
                      : ""
                  } md:flex-1 relative`}
                >
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <field.icon size={20} className="text-gray-500" />
                  </div>
                  <div className="w-full">
                    <div className="text-sm text-gray-500">
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </div>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder || ""}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      className="text-sm w-full focus:outline-none"
                    />
                    
                    {/* Location suggestions dropdown */}
                    {field.name === 'inputSearch' && showSuggestions && locationSuggestions.length > 0 && (
                      <div className="absolute left-0 right-0 top-full mt-1 bg-white shadow-lg rounded-md z-50 max-h-60 overflow-y-auto">
                        {locationSuggestions.map(location => (
                          <div 
                            key={location.id}
                            className="p-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
                            onClick={() => handleLocationSelect(location)}
                          >
                            <div className="font-medium">{location.name}</div>
                            <div className="text-xs text-gray-500">{location.address}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <div className="p-3 md:w-1/6">
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`w-full ${loading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} text-white py-3 px-4 rounded-md transition flex items-center justify-center`}
                >
                  {loading ? (
                    <>
                      <Loader size={18} className="animate-spin mr-2" />
                      <span>Searching...</span>
                    </>
                  ) : (
                    <span>Search</span>
                  )}
                </button>
              </div>
            </div>
          )}
          
          {/* Search Results */}
          {showResults && (
            <div className="mt-4">
              {/* Filters */}
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full"
                >
                  <Filter size={14} className="mr-1" />
                  Filters
                </button>
                
                <select 
                  value={formData.carType}
                  onChange={(e) => setFormData({...formData, carType: e.target.value})}
                  className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full"
                >
                  <option value="all">All Car Types</option>
                  <option value="economy">Economy</option>
                  <option value="compact">Compact</option>
                  <option value="midsize">Mid-size</option>
                  <option value="suv">SUV</option>
                  <option value="luxury">Luxury</option>
                </select>
                
                <select 
                  className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full"
                >
                  <option>Sort: Recommended</option>
                  <option>Sort: Price Low to High</option>
                  <option>Sort: Price High to Low</option>
                  <option>Sort: Highest Rated</option>
                </select>
              </div>
              
              {/* Expanded filters */}
              {showFilters && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">Price Range (per day)</h3>
                  <div className="flex items-center gap-2">
                    <span>${formData.priceRange[0]}</span>
                    <input 
                      type="range" 
                      min="0"
                      max="500"
                      step="10"
                      value={formData.priceRange[1]}
                      onChange={(e) => setFormData({...formData, priceRange: [formData.priceRange[0], parseInt(e.target.value)]})}
                      className="w-full"
                    />
                    <span>${formData.priceRange[1]}</span>
                  </div>
                  
                  <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-1" />
                      <span className="text-sm">Automatic</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-1" />
                      <span className="text-sm">Manual</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-1" />
                      <span className="text-sm">Air Conditioning</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-1" />
                      <span className="text-sm">4+ Seats</span>
                    </label>
                  </div>
                </div>
              )}
              
              {/* Car Result Cards */}
              <div className="space-y-4">
                {searchResults.map(car => (
                  <div key={car.id} className="border rounded-lg p-4 hover:shadow-md transition flex flex-col md:flex-row">
                    {/* Car Image */}
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="bg-gray-200 h-40 rounded-md flex items-center justify-center">
                        <span className="text-gray-500">Car Image</span>
                      </div>
                    </div>
                    
                    {/* Car Details */}
                    <div className="md:w-2/4 md:px-4">
                      <h3 className="text-lg font-bold">{car.make} {car.model} ({car.year})</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="mr-2">{car.type}</span>
                        <span className="mr-2">•</span>
                        <span className="mr-2">{car.seats} Seats</span>
                        <span className="mr-2">•</span>
                        <span>{car.transmission}</span>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span className="ml-1 text-sm font-medium">{car.rating}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {car.features.map((feature, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Pricing & Booking */}
                    <div className="md:w-1/4 flex flex-col justify-between border-t pt-4 mt-4 md:border-t-0 md:pt-0 md:mt-0">
                      <div>
                        <div className="text-sm text-gray-500">Price per day</div>
                        <div className="text-2xl font-bold">${car.pricePerDay}</div>
                        <div className="text-sm text-gray-500">
                          ${(car.pricePerDay * getDaysBetween(formData.pickupDate, formData.returnDate)).toFixed(2)} total
                        </div>
                      </div>
                      
                      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition">
                        Select
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Only show other sections when not showing results */}
      {!showResults && (
        <>
          <CarRentalPage />
          <WhyChooseUsSection />
          <PopularRentalDeals />
          <ClientSay />
        </>
      )}
    </div>
  );
};

// Helper function to calculate days between dates
function getDaysBetween(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays || 1; // Minimum 1 day
}

export default HomePage;